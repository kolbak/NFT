import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from "@chakra-ui/react"

import presale from "../images/presale.jpg"

import './mint-pass.scss'

// const isBrowser = typeof window !== "undefined"
// let connect;
// let mint;

// var mainError = "Something went wrong. Contact support";
// if (isBrowser) {
//   // var mainChainId = '0x1';
//   // var mainRpcUrls = 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161';
//   // var mainBlockExplorerUrls = 'https://etherscan.io';
//   // var mainChainName = 'ETH Mainnet(ETH)';

//   var mainChainId = '0x4';

//   var mainRpcUrls = 'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161';
//   var mainBlockExplorerUrls = 'https://etherscan.io';
//   var mainChainName = 'ETH Rinkeby(ETH)';

//   var contractAddress = '0x4eF3c9b2AE34178c11aEC32Dc30bA87C9CF739e1';
//   var abi = '[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"string","name":"baseTokenURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"SendETH","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"percent","type":"uint256"}],"name":"SetNewPercent","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"nameValue","type":"string"},{"indexed":false,"internalType":"uint256","name":"oldValue","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newValue","type":"uint256"}],"name":"SetNewValue","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"PHALLUS_MAX_AMOUNT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PHALLUS_PER_TX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PHALLUS_PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PHALLUS_TIME_FOR_GROWN","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TEAM_FUND","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"_founderPercents","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_tokenURIPrefix","type":"string"}],"name":"_setTokenURIPrefix","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimETH","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"members","type":"address[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"name":"enableClaimFoundingMembers","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"founders","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getBirthday","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getIpfsHash","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getIpfsTokenUri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isAvailableForClaim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isPreSaleActive","outputs":[{"internalType":"bool","name":"status","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isPublicSaleActive","outputs":[{"internalType":"bool","name":"status","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintPresaleMember","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mintPresaleMemberWithAmount","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mintPublic","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"mintedPresaleCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseTokenURI","type":"string"}],"name":"setBaseTokenURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string[]","name":"ipfsHashs","type":"string[]"},{"internalType":"uint256[]","name":"idTokens","type":"uint256[]"}],"name":"setIpfsHash","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPercent","type":"uint256"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"setPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPerTx","type":"uint256"}],"name":"setPhallusPerTx","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"setPhallusPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"togglePreSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"togglePublicSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenURIPrefix","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"tokensOfOwner","outputs":[{"internalType":"uint256[]","name":"ownerTokens","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]';

//   var wallet;
//   var contractController;
//   var isConnect = false;
//   var signer = undefined;
//   var current_network = undefined;
//   var price = ethers.utils.parseUnits("1.00", 18);


//   connect = function connect() {
//     if (isConnect === false) {
//       doConnect();
//       isConnect = true;
//     }
//     initControllers();
//   }

//   // let openModal = false;
//   mint = function mint() {
//     var writeController = contractController.connect(signer);
//     writeController.PHALLUS_PRICE().then((data) => {
//       price = data;
//       console.log('price', price);
//       writeController.mintPublic(1, {value: price}).then((err, data) => {
//       }).catch(function (error) {
//         // alert(mainError);
//         // openModal = true;
//         window.onOpenModalMint && window.onOpenModalMint();
//       });

//     }).catch(function (error) {
//     });
//   }

//   async function doConnect() {
//     let ethereum = window.ethereum;
//     ethereum
//       .request({ method: 'eth_requestAccounts' })
//       .then((handleAccountsChanged) => {
//         let provider = new ethers.providers.Web3Provider(ethereum);
//         signer = provider.getSigner();
//         if (current_network === mainChainId) {
//           connect();
//         }
//       }
//       )
//       .catch((error) => {
//         if (error.code === 4001) {
//           // EIP-1193 userRejectedRequest error
//           console.log('Please connect to MetaMask.');
//         } else {
//           console.error(error);
//           alert("Пожалуйста, обновите страницу");
//         }
//       });
//     await switchEthereumChain();
//     current_network = ethereum.networkVersion;
//     if (current_network === mainChainId) {
//       initControllers();
//     } else if (isConnect) {
//       isConnect = false;
//       //location.reload();
//     }
//     console.log("current_network", current_network);

//     const accounts = await ethereum.request({ method: 'eth_accounts' }).catch(checkErrEthAccounts());
//     wallet = accounts[0];
//     console.log("wallet", wallet);
//   }

//   async function checkErrEthAccounts(error) {
//     if (isConnect && current_network != mainChainId) {
//     }
//   }

//   async function switchEthereumChain() {
//     let ethereum = window.ethereum;
//     try {
//       await ethereum.request({
//         method: 'wallet_switchEthereumChain',
//         params: [{ chainId: mainChainId }],
//       }).then((handleswitchEthereumChain) => {
//       })
//         .catch();
//     } catch (switchError) {
//       signer = undefined;
//       // This error code indicates that the chain has not been added to MetaMask.
//       isConnect = false;
//       checkShowConnect();
//       if (switchError.code === 4902) {
//         try {
//           await switchToMain();
//         } catch (addError) {
//           // handle "add" error
//         }
//       }
//       // handle other "switch" errors
//     }
//   }

//   async function switchToMain() {
//     let ethereum = window.ethereum;
//     const data = [{
//       chainId: mainChainId,
//       chainName: mainChainName,
//       nativeCurrency: {
//         name: 'ETHEREUM',
//         symbol: 'ETH',
//         decimals: 18,
//       },
//       rpcUrls: [mainRpcUrls],
//       blockExplorerUrls: [mainBlockExplorerUrls],
//     }]
//     const tx = await ethereum.request({ method: 'wallet_addEthereumChain', params: data }).catch()
//     current_network = ethereum.networkVersion;
//     if (tx) {
//       console.log('tx = ', tx);
//     }
//   }

//   function initContracts() {
//     if (signer === undefined) {
//       isConnect = false;
//       return;
//     }
//   }

//   function initControllers() {
//     contractController = new ethers.Contract(contractAddress, abi, signer);
//     console.log('initControllers ...');
//     isConnect = true;
//     checkShowConnect();
//   }

//   function checkShowConnect() {
//     console.log('isConnect = ', isConnect);
//     console.log('signer = ', signer);
//     if (isConnect) {
//       //     if (isConnect && signer != undefined) {
//       $('#connectButton').hide();
//       $('#mintButton').show();
//     } else {
//       $('#connectButton').show();
//       $('#mintButton').hide();
//     }
//   }
// }

const MintPass = () => {
  const isBrowser = typeof window !== "undefined"

  let [screenWidth, setScreenWidth] = useState(isBrowser && window.innerWidth);
  isBrowser && window.addEventListener("resize", resizeInMintPass);
  function resizeInMintPass() {
    setScreenWidth(isBrowser && window.innerWidth);
  }

  const { isOpen, onOpen, onClose } = useDisclosure();
  if (isBrowser) {
    window.onOpenModalMint = onOpen;
  }
  function useForceUpdate() {
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
  }
  return (
    <Layout>
      <Seo title="Mint-pass" isMintPassPage={true} />
      <div className="gen-wrap presale-wrap">
        <h1>#FAPP MINT-PASS</h1>
        <div className="content">
          {screenWidth > 1300 &&
            <>
              <div className="text">
                <p>#FAPP Comic Book | FAPP-CB is a collection of 500 tradable mint-pass NFT comic books.</p>
                <p>FAPP-CB gives you pre-sale access that lets you get access to exclusive raffles, buy up to 7 #FAPP loot-boxes before the public sale and avoid GAS war (very expensive ETH GAS fees).</p>
                <div className="btns">
                  <button onClick={() => {
                    window.__connect && window.__connect();
                  }} className="cnct-wallet">Connect your wallet</button>
                  <button onClick={() => {
                    window.__mint && window.__mint();
                  }} className="mint">Mint 0.06 ETH</button>
                </div>
                <p className="agreement">By minting a FAPP-CB you agree to our <Link to="/terms">Terms of Service.</Link></p>
              </div>
              <img src={presale} alt="presale image" />

              <Modal isCentered
                isOpen={isOpen}
                onClose={onClose}>
                <ModalOverlay />
                <ModalContent style={{ display: 'flex', fontFamily: '"Amatic SC", cursive', color: 'white', backgroundColor: 'rgba(19, 24, 38, 1)' }}>
                  <ModalHeader><ModalCloseButton style={{ transform: 'scale(.5)', opacity: '.7', display: 'inline-block', position: 'initial', float: 'right' }} /></ModalHeader>

                  <ModalBody>
                    <p style={{ textAlign: 'center', margin: '10px 50px 50px 50px' }}>Something went wrong. Contact support</p>
                    {/* <p>Join our <a style={{ color: 'rgb(59, 130, 246)' }} className="link-discord" href="https://discord.gg/zFjWr4wUwH"><span>Discord</span></a> server and <a style={{ color: 'rgb(59, 130, 246)' }} className="link-discord" href="https://twitter.com/FAP_Planet"><span>Twitter</span></a> to get the latest news!</p> */}
                  </ModalBody>
                </ModalContent>
              </Modal>
            </>
          }
          {screenWidth <= 1300 &&
            <>
              <p>#FAPP Comic Book | FAPP-CB is a collection of 500 tradable mint-pass NFT comic books.</p>
              <p>FAPP-CB gives you pre-sale access that lets you get access to exclusive raffles, buy up to 7 #FAPP loot-boxes before the public sale and avoid GAS war (very expensive ETH GAS fees).</p>
              <img src={presale} alt="presale image" />
              <button onClick={() => {
                window.__connect && window.__connect();
              }} className="cnct-wallet">Connect your wallet</button>
              <button onClick={() => {
                window.__mint && window.__mint();
              }} className="mint">Mint 0.06 ETH</button>
              <p className="agreement">By minting a FAPP-CB you agree to our <Link to="/terms">Terms of Service.</Link></p>

              <Modal isCentered isOpen={isOpen} onClose={onClose} >
                <ModalOverlay />
                <ModalContent style={{ display: 'flex', fontFamily: '"Amatic SC", cursive', color: 'white', backgroundColor: 'rgba(19, 24, 38, 1)' }}>
                  <ModalHeader><ModalCloseButton style={{ transform: 'scale(.5)', opacity: '.7', display: 'inline-block', position: 'initial', float: 'right' }} /></ModalHeader>

                  <ModalBody>
                    <p style={{ textAlign: 'center', margin: '10px 50px 50px 50px' }}>Something went wrong. Contact support</p>
                    {/* <p>Join our <a style={{ color: 'rgb(59, 130, 246)' }} className="link-discord" href="https://discord.gg/zFjWr4wUwH"><span>Discord</span></a> server and <a style={{ color: 'rgb(59, 130, 246)' }} className="link-discord" href="https://twitter.com/FAP_Planet"><span>Twitter</span></a> to get the latest news!</p> */}
                  </ModalBody>
                </ModalContent>
              </Modal>
            </>
          }

        </div>
      </div>
      {/* <script charset="utf-8"
        src="https://cdn.ethers.io/lib/ethers-5.1.umd.min.js"
        type="text/javascript">
      </script> */}
      {/* <script src='../scripts/web3_script.js' type='text/javascript'></script> */}
    </Layout>)
}

export default MintPass