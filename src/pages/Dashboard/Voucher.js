import { useEffect, useState, useMemo } from "react";
import { Box } from "@mui/material";

import { fetchEquippedVouchers, fetchEquipSignature } from "utils/api";
import {
  approveVoucherForTv,
  checkVoucherForTvApproval,
  equipVoucher,
  getVoucherBalance,
  unequipVoucher,
} from "contract/functions";
import VoucherCard from "components/Dashboard/VoucherCard";
import { useSelector } from "react-redux";
import { OutlinedAccordian } from "components/Accordian";
//import { useAppSelector } from "../../app/hooks";

export default function VoucherView() {
  const [isApproved, setIsApproved] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [voucherBalance, setVoucherBalance] = useState([0, 0, 0]);
  const [eligibleGlasses, setEligibleGlasses] = useState();
  const [equippedBalance, setEquippedBalance] = useState();
  const [expanded, setExpanded] = useState({ 0: true, 1: true, 2: true });

  const { accountAddress } = useSelector((state) => state.metamask_state);
  const [glasses, setGlasses] = useState([]);

  // const glasses = useAppSelector(selectGlasses);

  useEffect(() => {
    if (accountAddress) {
      handleFetchVouchers();
      handleFetchEquipped();
      checkIsApproved();
    }
  }, [accountAddress]);

  useEffect(() => {
    if (accountAddress && glasses.length && equippedBalance?.length) {
      handleEligibleGlasses();
    }
  }, [glasses, equippedBalance]);

  const splitByType = (arr) =>
    arr.reduce(
      (splits, obj) => {
        const type = obj.type;
        if (obj.level >= 20 && splits[type]) {
          splits[type].push(obj.tokenId);
        }
        return splits;
      },
      { COMMON: [], RARE: [], SUPERSCRIPT: [] }
    );

  const handleRefresh = async () => {
    if (accountAddress) {
      await handleFetchVouchers();
      await handleFetchEquipped();
      handleEligibleGlasses();
      setIsDisabled(false);
    }
  };

  const handleChange = (panel) => (event, newExpanded) => {
    const temp = expanded;
    temp[panel] = !expanded[panel];
    setExpanded({ ...temp });
  };

  const handleEligibleGlasses = () => {
    if (accountAddress && glasses.length && equippedBalance?.length) {
      let types = splitByType(glasses);
      let common = types.COMMON.filter((x) => !equippedBalance[0].includes(x));
      let rare = types.RARE.filter((x) => !equippedBalance[0].includes(x));
      let superscript = types.SUPERSCRIPT.filter(
        (x) => !equippedBalance[0].includes(x)
      );
      setEligibleGlasses([[...common], [...rare], [...superscript]]);
    }
  };

  const handleFetchVouchers = async () => {
    if (accountAddress) {
      const vouchers = await getVoucherBalance(accountAddress);
      console.log("vouchers", vouchers);
      setVoucherBalance(vouchers);
    }
  };

  const handleFetchEquipped = async () => {
    if (accountAddress) {
      const vouchers = await fetchEquippedVouchers(accountAddress);
      setEquippedBalance(vouchers);
    }
  };

  const checkIsApproved = async () => {
    if (accountAddress) {
      const isAllowed = await checkVoucherForTvApproval(accountAddress);
      setIsApproved(isAllowed);
    }
  };

  const handleApprove = async () => {
    if (accountAddress) {
      let receipt = await approveVoucherForTv();
      setIsApproved(!!receipt.status);
    }
  };

  const handleEquipCommon = async (tokenId) => {
    if (accountAddress) {
      if (!isApproved) {
        await handleApprove();
      }
      if (isApproved) {
        let signature = await getEquipSignature(tokenId);
        await equipVoucher(0, tokenId, signature, setIsDisabled);
        handleRefresh();
      }
    }
  };
  const handleEquipRare = async (tokenId) => {
    if (accountAddress) {
      if (!isApproved) {
        await handleApprove();
      }
      if (isApproved) {
        let signature = await getEquipSignature(tokenId);
        await equipVoucher(1, tokenId, signature, setIsDisabled);
        handleRefresh();
      }
    }
  };
  const handleEquipSuper = async (tokenId) => {
    if (accountAddress) {
      if (!isApproved) {
        await handleApprove();
      }
      if (isApproved) {
        let signature = await getEquipSignature(tokenId);
        await equipVoucher(2, tokenId, signature, setIsDisabled);
        handleRefresh();
      }
    }
  };

  const getEquipSignature = async (tokenId) => {
    let sig = await fetchEquipSignature(tokenId);
    return sig;
  };

  const handleUnEquip = async (tokenId) => {
    if (accountAddress) {
      await unequipVoucher(tokenId);
      handleRefresh();
    }
  };

  return (
    <Box sx={{ flexGrow: 1, m: 4 }}>
      <OutlinedAccordian
        expanded={expanded[0]}
        onChange={handleChange(0)}
        title="COMMON"
      >
        {Array.from(Array(voucherBalance[0])).map((_, idx) => (
          <VoucherCard
            key={idx}
            disabled={isDisabled}
            eligibleGlasses={eligibleGlasses?.length ? eligibleGlasses[0] : []}
            clickHandler={handleEquipCommon}
          />
        ))}
        {equippedBalance?.length &&
          equippedBalance[0]?.map((glassId) => (
            <VoucherCard
              key={glassId}
              equipped={true}
              glassId={glassId}
              clickHandler={handleUnEquip}
            />
          ))}
      </OutlinedAccordian>
      <OutlinedAccordian
        expanded={expanded[1]}
        onChange={handleChange(1)}
        title="RARE"
      >
        {Array.from(Array(voucherBalance[1])).map((_, idx) => (
          <VoucherCard
            key={idx}
            disabled={isDisabled}
            eligibleGlasses={eligibleGlasses?.length ? eligibleGlasses[1] : []}
            clickHandler={handleEquipRare}
          />
        ))}
        {equippedBalance?.length &&
          equippedBalance[1]?.map((glassId) => (
            <VoucherCard
              key={glassId}
              equipped={true}
              glassId={glassId}
              clickHandler={handleUnEquip}
            />
          ))}
      </OutlinedAccordian>
      <OutlinedAccordian
        expanded={expanded[2]}
        onChange={handleChange(2)}
        title="SUPERSCRIPT"
      >
        {Array.from(Array(voucherBalance[2])).map((_, idx) => (
          <VoucherCard
            key={idx}
            disabled={isDisabled}
            eligibleGlasses={eligibleGlasses?.length ? eligibleGlasses[2] : []}
            clickHandler={handleEquipSuper}
          />
        ))}
        {equippedBalance?.length &&
          equippedBalance[2]?.map((glassId) => (
            <VoucherCard
              key={glassId}
              equipped={true}
              glassId={glassId}
              clickHandler={handleUnEquip}
            />
          ))}
      </OutlinedAccordian>
    </Box>
  );
}
