import ABI from "./abi.json"
const ethers = require("ethers")
import config from "./config.json"

let ethereum
let contractInstance
let connected = false
let signer
let currentNetwork
let provider

//FUNCTIONS

export async function connectToContract(_ethereum) {
  ethereum = _ethereum
  if (connected === false) {
    await doConnect()
    connected = true
    console.log(contractInstance)
    return true
  }
}

async function doConnect() {
  try {
    if (ethereum) {
      currentNetwork = ethereum.networkVersion
      if (currentNetwork !== config.mainChainId) {
        await switchEthereumNetwork()
      }
      // connecting to Metamask
      const res = await ethereum.request({ method: "eth_requestAccounts" })

      // getting procider and signer
      provider = new ethers.providers.Web3Provider(ethereum)
      signer = provider.getSigner()

      // getting instance of contract
      console.log(config.contractArdess)
      contractInstance = new ethers.Contract(config.contractArdess, ABI, signer)
    } else alert("Connect Metamask!")
  } catch (err) {
    console.error(err)
  }
}

async function validateNetwork() {
  if (currentNetwork !== ethereum.networkVersion) {
    await switchEthereumNetwork()
  }
  return true
}

async function switchEthereumNetwork() {
  try {
    await ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: `0x${config.mainChainId.toString(16)}` }],
    })
  } catch (err) {
    signer = undefined
    console.error(err)
  }
}

// HANDLERS

export async function mint(amount) {
  try {
    if (contractInstance) {
      await validateNetwork()
      const trustedInstance = contractInstance.connect(signer)

      const price = await trustedInstance.PHALLUS_PRICE()

      const res = await trustedInstance.mintPresaleMemberWithAmount(amount, {
        value: price,
      })

      //   const res = await trustedInstance.mintPublic(amount, {
      //     value: price,
      //   })

      return true
    } else {
      alert("Connect your metamask wallet!")
    }
  } catch (err) {
    alert(err.message)
  }
}
