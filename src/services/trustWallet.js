
export default class TrustWalletService {
    static injectedProviderExist() {
        return typeof window !== "undefined" && typeof window.ethereum !== "undefined";
    }

    
    static isTrustWallet(ethereum) {
        // Identify if Trust Wallet injected provider is present.
        const trustWallet = !!ethereum.isTrust;
        return trustWallet;
    };

    static checkTrustWallet() {
        if (!this.injectedProviderExist()) {
            return null;
        }

        if (this.isTrustWallet(window.ethereum)) {
            return window.ethereum;
        }
    
        if (window.ethereum?.providers) {
            return window.ethereum.providers.find(this.isTrustWallet) ?? null;
        }
        
        return window["trustwallet"] ?? null;
    }

}
