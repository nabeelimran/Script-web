import { useEffect, useState, useMemo } from "react";
import { Box, Container, Typography } from "@mui/material";

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
import { ToastMessage } from "components/ToastMessage";
import VoucherMintBox from "components/Dashboard/VoucherMintBox";
import { currentChainSupported, parseChainIdHex } from "common/helpers/utils";
//import { useAppSelector } from "../../app/hooks";

export default function VoucherView() {
  const [isApproved, setIsApproved] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [voucherBalance, setVoucherBalance] = useState([0, 0, 0]);
  const [eligibleGlasses, setEligibleGlasses] = useState();
  const [equippedBalance, setEquippedBalance] = useState();
  const [expanded, setExpanded] = useState({ 0: true, 1: true, 2: true });

  const { accountAddress } = useSelector((state) => state.metamask_state);

  const { glasses } = useSelector((state) => state.Profile_State);

  const [rareGlassesState, setRareGlassesState] = useState({
    loading: false,
  });
  const [commonGlassesState, setCommonGlassesState] = useState({
    loading: false,
  });
  const [superscriptGlassesState, setSuperscriptGlassesState] = useState({
    loading: false,
  });

  const [currentGlassIndex, setCurrentGlassIndex] = useState(null);
  const [unequippedLoading, setUnequippedLoading] = useState("none");

  const [currentChain, setCurrentChain] = useState(null);

  useEffect(() => {
    if (accountAddress) {
      fetchVouchers();
      checkIsApproved();
    }
  }, [accountAddress]);

  const fetchVouchers = async () => {
    handleFetchVouchers();
    handleFetchEquipped();
  };

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
    try {
      if (accountAddress) {
        const vouchers = await getVoucherBalance(accountAddress);
        console.log("vouchers", vouchers);
        setVoucherBalance(vouchers);
      }  
    } catch (error) {
      setVoucherBalance(0);
    }
  };

  const handleFetchEquipped = async () => {
    if (accountAddress) {
      const vouchers = await fetchEquippedVouchers(accountAddress);
      console.log("handleFetchEquipped", vouchers);
      setEquippedBalance(vouchers);
    }
  };

  const checkIsApproved = async () => {
    try {
      if (accountAddress) {
        const isAllowed = await checkVoucherForTvApproval(accountAddress);
        console.log("isAllowed", isAllowed);
        setIsApproved(isAllowed);
      }  
    } catch (error) {
      setIsApproved(false);
    }
  };

  const handleApprove = async (onSuccess) => {
    if (accountAddress) {
      try {
        let receipt = await approveVoucherForTv();
        setIsApproved(!!receipt.status);
        onSuccess();
      } catch (error) {
        console.log("error", error);
        throw error;
      }
    }
  };

  const handleEquipCommon = async (tokenId, index) => {
    if (accountAddress) {
      setCurrentGlassIndex(index);
      setCommonGlassesState({
        ...commonGlassesState,
        loading: true,
      });
      try {
        if (!isApproved) {
          await handleApprove(() => {
            setCommonGlassesState({
              ...commonGlassesState,
              loading: false,
            });
            ToastMessage("Approved", true);
          });
          return;
        }
        if (isApproved) {
          let signature = await getEquipSignature(tokenId);
          const response = await equipVoucher(
            0,
            tokenId,
            signature,
            setIsDisabled
          );

          if (response.status === 1) {
            ToastMessage("Voucher equipped successfully", true);
          }
          setCommonGlassesState({
            ...commonGlassesState,
            loading: false,
          });
          handleRefresh();
        }
      } catch (error) {
        console.log("error", error);
        ToastMessage("Something went wrong");
        setCommonGlassesState({
          ...commonGlassesState,
          loading: false,
        });
      }
    }
  };

  const handleEquipRare = async (tokenId, index) => {
    if (accountAddress) {
      setCurrentGlassIndex(index);
      setRareGlassesState({
        ...rareGlassesState,
        loading: true,
      });

      console.log("handleEquipRare", { tokenId, index, isApproved });

      try {
        if (!isApproved) {
          await handleApprove(() => {
            setRareGlassesState({
              ...rareGlassesState,
              loading: false,
            });
            ToastMessage("Approved", true);
          });
          return;
        }

        if (isApproved) {
          let signature = await getEquipSignature(tokenId);
          console.log("signature", signature);
          const response = await equipVoucher(
            1,
            tokenId,
            signature,
            setIsDisabled
          );
          console.log("response", response);
          if (response?.status === 1) {
            ToastMessage("Voucher equipped successfully", true);
          }
          setRareGlassesState({
            ...rareGlassesState,
            loading: false,
          });

          handleRefresh();
        }
      } catch (error) {
        console.log("error", error);
        ToastMessage("Something went wrong");
        setRareGlassesState({
          ...rareGlassesState,
          loading: false,
        });
      }
    }
  };

  const handleEquipSuper = async (tokenId, index) => {
    if (accountAddress) {
      setCurrentGlassIndex(index);
      setSuperscriptGlassesState({
        ...superscriptGlassesState,
        loading: true,
      });
      try {
        console.log("isApproved", isApproved);
        if (!isApproved) {
          await handleApprove(() => {
            setSuperscriptGlassesState({
              ...superscriptGlassesState,
              loading: false,
            });
            ToastMessage("Approved", true);
          });
          return;
        }
        if (isApproved) {
          let signature = await getEquipSignature(tokenId);
          const response = await equipVoucher(
            2,
            tokenId,
            signature,
            setIsDisabled
          );
          setSuperscriptGlassesState({
            ...superscriptGlassesState,
            loading: false,
          });
          console.log("response", response);

          if (response.status === 1) {
            ToastMessage("Voucher equipped successfully", true);
          }
          handleRefresh();
        }
      } catch (error) {
        console.log("error", error);
        ToastMessage("Something went wrong");
        setSuperscriptGlassesState({
          ...superscriptGlassesState,
          loading: false,
        });
      }
    }
  };

  const getEquipSignature = async (tokenId) => {
    let sig = await fetchEquipSignature(tokenId);
    return sig;
  };

  const handleUnEquip = async (tokenId, index, type) => {
    if (accountAddress) {
      setCurrentGlassIndex(index);
      setUnequippedLoading(type);
      try {
        const response = await unequipVoucher(tokenId);
        setUnequippedLoading("none");
        if (response.status === 1) {
          ToastMessage("Voucher unequipped successfully", true);
        }
        handleRefresh();
      } catch (error) {
        console.log("error", error);
        ToastMessage("Something went wrong");
        setUnequippedLoading("none");
      }
    }
  };

  console.log("voucherBalance", { voucherBalance, eligibleGlasses });

  useEffect(() => {
    if (!window?.ethereum) return;

    setCurrentChain(parseChainIdHex(window?.ethereum?.chainId));

    window.ethereum.on("chainChanged", () => {
      setCurrentChain(parseChainIdHex(window?.ethereum?.chainId));
    });
  }, []);

  if (accountAddress && currentChain && !currentChainSupported(currentChain)) {
    return (
      <Container maxWidth="md" sx={{ my: 20 }} id="mint">
        <p
          className="text-lg opacity-80 text-center"
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          Current Chain is not supported
        </p>
      </Container>
    );
  }

  return (
    <Box sx={{ flexGrow: 1, m: 4 }}>
      <Container maxWidth="md" sx={{ my: 6 }} id="mint">
        <VoucherMintBox
          accountAddress={accountAddress}
          onVoucherMintSuccess={fetchVouchers}
        />
      </Container>

      <Typography variant="h4" color="textSecondary" align="center" mb={2}>
        Equipable Vouchers
      </Typography>
      <OutlinedAccordian
        expanded={expanded[0]}
        onChange={handleChange(0)}
        title="COMMON"
      >
        {Array.from(Array(voucherBalance[0])).map((_, idx) => (
          <VoucherCard
            key={idx}
            index={idx}
            isApproved={isApproved}
            disabled={isDisabled}
            eligibleGlasses={eligibleGlasses?.length ? eligibleGlasses[0] : []}
            clickHandler={handleEquipCommon}
            loading={idx === currentGlassIndex && commonGlassesState.loading}
          />
        ))}
        {equippedBalance?.length &&
          equippedBalance[0]?.map((glassId, index) => (
            <VoucherCard
              key={glassId}
              index={index}
              type="COMMON"
              equipped={true}
              glassId={glassId}
              clickHandler={handleUnEquip}
              loading={
                unequippedLoading === "COMMON" && index === currentGlassIndex
              }
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
            index={idx}
            isApproved={isApproved}
            disabled={isDisabled}
            eligibleGlasses={eligibleGlasses?.length ? eligibleGlasses[1] : []}
            clickHandler={handleEquipRare}
            loading={idx === currentGlassIndex && rareGlassesState.loading}
          />
        ))}
        {equippedBalance?.length &&
          equippedBalance[1]?.map((glassId, index) => (
            <VoucherCard
              key={glassId}
              type="RARE"
              index={index}
              equipped={true}
              glassId={glassId}
              clickHandler={handleUnEquip}
              loading={
                unequippedLoading === "RARE" && index === currentGlassIndex
              }
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
            index={idx}
            eligibleGlasses={eligibleGlasses?.length ? eligibleGlasses[2] : []}
            isApproved={isApproved}
            clickHandler={handleEquipSuper}
            loading={
              idx === currentGlassIndex && superscriptGlassesState.loading
            }
          />
        ))}
        {equippedBalance?.length &&
          equippedBalance[2]?.map((glassId, index) => (
            <VoucherCard
              key={glassId}
              equipped={true}
              type="SUPERSCRIPT"
              index={index}
              glassId={glassId}
              clickHandler={handleUnEquip}
              loading={
                unequippedLoading === "SUPERSCRIPT" &&
                index === currentGlassIndex
              }
            />
          ))}
      </OutlinedAccordian>
    </Box>
  );
}
