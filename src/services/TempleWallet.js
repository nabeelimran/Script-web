import { TempleWallet } from "@temple-wallet/dapp";

export class TempleWalletService {

    static async isCheckWalletPlugin() {
        try {
            const available = await TempleWallet.isAvailable();
            console.log(available);
            return available ? true : false;
        } catch (error) {
            return false;
        }
    }

    static async connectWallet() {
        try {
            const wallet = new TempleWallet("Script Network");
            await wallet.connect("mainnet");
            const tezos = wallet.toTezos();
            const accountPkh = await tezos.wallet.pkh();
            const accountBalance = await tezos.tz.getBalance(accountPkh);
            console.info(`address: ${accountPkh}, balance: ${accountBalance}`);
            return {
                data: {
                    accountPkh, accountBalance,
                },
                isSuccess: true
            }
        } catch (error) {
            console.log(error);
            return {
                isSuccess: false,
                data: error
            }
        }
    }

}
