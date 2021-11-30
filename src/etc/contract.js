import ABI from "./abi.json"
const ethers = require("ethers")
const contractAddress = "0x5334F2a1d1C0D536E28452A5740D3290067844D7" // you can change this
const mainChainId = 4

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
      if (currentNetwork !== mainChainId) {
        await switchEthereumNetwork()
      }
      // connecting to Metamask
      const res = await ethereum.request({ method: "eth_requestAccounts" })
      wallet = res[0]

      // getting procider and signer
      provider = new ethers.providers.Web3Provider(ethereum)
      signer = provider.getSigner()

      // getting instance of contract
      contractInstance = new ethers.Contract(contractAddress, ABI, signer)
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
      params: [{ chainId: `0x${mainChainId.toString(16)}` }],
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
      //   const price = await trustedInstance.FAPP_CB_PRICE()
      //   const res = await trustedInstance.mintPublic(amount)
      const res = await trustedInstance.mintPresaleMemberWithAmount(amount)
      return true
    } else {
      alert("Connect your metamask wallet!")
    }
  } catch (err) {
    alert(err.message)
  }
}
