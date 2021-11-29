import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import preview from "../images/storyline.jpeg"

function Seo({ lang, meta, title, refresh, isMintPassPage }) {
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={isMintPassPage ? title : "FAPP"}
      name="viewport" content="width=device-width, initial-scale=1.0"
      meta={[
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ].concat(meta)}
    >
      <meta name="description" content="website with NFT tokens, NFT collection, FAPP" />

      <meta name="og:description" content="8888 Generative 2.5 inch NFT Phalluses on Family Phallus Planet #FAPP" />
      <meta name="og:image" content={preview} />
      {/* <meta property="vk:image" content={preview} /> */}
      {refresh &&
        <meta httpEquiv="refresh" content="0.5; url=/" />
      }

      //? MintPass скрипт
      <script charset="utf-8"
        src="https://cdn.ethers.io/lib/ethers-5.1.umd.min.js"
        type="text/javascript">
      </script>
      <script>
        {`
            const isBrowser = typeof window !== "undefined"
            // let connect;
            // let mint;


            // var mainError = "Something went wrong. Contact support";
            if (isBrowser) {
              // var mainChainId = '0x1';
              // var mainRpcUrls = 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161';
              // var mainBlockExplorerUrls = 'https://etherscan.io';
              // var mainChainName = 'ETH Mainnet(ETH)';

              var mainChainId = '0x4';

              var mainRpcUrls = 'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161';
              var mainBlockExplorerUrls = 'https://etherscan.io';
              var mainChainName = 'ETH Rinkeby(ETH)';

              var contractAddress = '0x4eF3c9b2AE34178c11aEC32Dc30bA87C9CF739e1';
              var abi = '[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"string","name":"baseTokenURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"SendETH","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"percent","type":"uint256"}],"name":"SetNewPercent","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"nameValue","type":"string"},{"indexed":false,"internalType":"uint256","name":"oldValue","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newValue","type":"uint256"}],"name":"SetNewValue","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"PHALLUS_MAX_AMOUNT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PHALLUS_PER_TX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PHALLUS_PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PHALLUS_TIME_FOR_GROWN","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TEAM_FUND","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"_founderPercents","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_tokenURIPrefix","type":"string"}],"name":"_setTokenURIPrefix","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimETH","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"members","type":"address[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"name":"enableClaimFoundingMembers","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"founders","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getBirthday","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getIpfsHash","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getIpfsTokenUri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isAvailableForClaim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isPreSaleActive","outputs":[{"internalType":"bool","name":"status","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isPublicSaleActive","outputs":[{"internalType":"bool","name":"status","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintPresaleMember","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mintPresaleMemberWithAmount","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mintPublic","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"mintedPresaleCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseTokenURI","type":"string"}],"name":"setBaseTokenURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string[]","name":"ipfsHashs","type":"string[]"},{"internalType":"uint256[]","name":"idTokens","type":"uint256[]"}],"name":"setIpfsHash","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPercent","type":"uint256"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"setPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPerTx","type":"uint256"}],"name":"setPhallusPerTx","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"setPhallusPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"togglePreSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"togglePublicSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenURIPrefix","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"tokensOfOwner","outputs":[{"internalType":"uint256[]","name":"ownerTokens","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]';

              var wallet;
              var contractController;
              var isConnect = false;
              var signer = undefined;
              var current_network = undefined;
              var price = ethers.utils.parseUnits("1.00", 18);


              window.__connect = function connect() {
                if (isConnect === false) {
                  doConnect();
                  isConnect = true;
                  window._isConnect = true;
                }
                initControllers();
              }

              // let openModal = false;
              window.__mint = function mint() {
                var writeController = contractController.connect(signer);
                writeController.PHALLUS_PRICE().then((data) => {
                  price = data;
                  console.log('price', price);
                  writeController.mintPublic(1, {value: price}).then((err, data) => {
                  }).catch(function (error) {
                    // alert(mainError);
                    // openModal = true;
                    window.onOpenModalMint && window.onOpenModalMint();
                  });

                }).catch(function (error) {
                });
              }

              async function doConnect() {
                let ethereum = window.ethereum;
                ethereum
                  .request({ method: 'eth_requestAccounts' })
                  .then((handleAccountsChanged) => {
                    let provider = new ethers.providers.Web3Provider(ethereum);
                    signer = provider.getSigner();
                    if (current_network === mainChainId) {
                      window.__connect();
                    }
                  }
                  )
                  .catch((error) => {
                    if (error.code === 4001) {
                      // EIP-1193 userRejectedRequest error
                      console.log('Please connect to MetaMask.');
                    } else {
                      console.error(error);
                      alert("Пожалуйста, обновите страницу");
                    }
                  });
                await switchEthereumChain();
                current_network = ethereum.networkVersion;
                if (current_network === mainChainId) {
                  initControllers();
                } else if (isConnect) {
                  isConnect = false;
                  //location.reload();
                }
                console.log("current_network", current_network);

                const accounts = await ethereum.request({ method: 'eth_accounts' }).catch(checkErrEthAccounts());
                wallet = accounts[0];
                console.log("wallet", wallet);
              }

              async function checkErrEthAccounts(error) {
                if (isConnect && current_network != mainChainId) {
                }
              }

              async function switchEthereumChain() {
                let ethereum = window.ethereum;
                try {
                  await ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: mainChainId }],
                  }).then((handleswitchEthereumChain) => {
                  })
                    .catch();
                } catch (switchError) {
                  signer = undefined;
                  // This error code indicates that the chain has not been added to MetaMask.
                  isConnect = false;
                  checkShowConnect();
                  if (switchError.code === 4902) {
                    try {
                      await switchToMain();
                    } catch (addError) {
                      // handle "add" error
                    }
                  }
                  // handle other "switch" errors
                }
              }

              async function switchToMain() {
                let ethereum = window.ethereum;
                const data = [{
                  chainId: mainChainId,
                  chainName: mainChainName,
                  nativeCurrency: {
                    name: 'ETHEREUM',
                    symbol: 'ETH',
                    decimals: 18,
                  },
                  rpcUrls: [mainRpcUrls],
                  blockExplorerUrls: [mainBlockExplorerUrls],
                }]
                const tx = await ethereum.request({ method: 'wallet_addEthereumChain', params: data }).catch()
                current_network = ethereum.networkVersion;
                if (tx) {
                  console.log('tx = ', tx);
                }
              }

              function initContracts() {
                if (signer === undefined) {
                  isConnect = false;
                  return;
                }
              }

              function initControllers() {
                contractController = new ethers.Contract(contractAddress, abi, signer);
                console.log('initControllers ...');
                isConnect = true;
                checkShowConnect();
              }

              function checkShowConnect() {
                console.log('_isConnect = ', window._isConnect);
                console.log('signer = ', signer);
                if (isConnect) {
                  window._isConnect = isConnect
                  $('#connectButton').hide();
                  $('#mintButton').show();
                } else {
                  $('#connectButton').show();
                  $('#mintButton').hide();
                }
              }
            }
          `}
      </script>
      //? Yandex.Metrika counter
      <script>
        {`(function (m, e, t, r, i, k, a) {
            m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) };
            m[i].l = 1 * new Date(); k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
          })
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

          ym(85436380, "init", {
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true,
            webvisor: true
          });`}
      </script>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
      <noscript >
        {`<div><img src="https://mc.yandex.ru/watch/85436380" style="position:absolute; left:-9999px;" alt="" /></div>`}
      </noscript>
    </Helmet>
  )
}

Seo.defaultProps = {
  lang: `ru`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
