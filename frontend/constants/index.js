CONTRACT_ADDRESS="0xF54468269dD5A5bC6682E6e101bFCD55060044CE";
CONTRACT_ABI= [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "credentialID",
          "type": "uint256"
        }
      ],
      "name": "DeletedCredential",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "credentialID",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "ipfsCID",
          "type": "string"
        }
      ],
      "name": "ExistingCredentialUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "credentialID",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "ipfsCID",
          "type": "string"
        }
      ],
      "name": "NewCredentialAdded",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_ipfsCID",
          "type": "string"
        }
      ],
      "name": "addNewCredential",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "deleteCredential",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "retrieveCredentials",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint32",
              "name": "credentialID",
              "type": "uint32"
            },
            {
              "internalType": "bool",
              "name": "status",
              "type": "bool"
            },
            {
              "internalType": "string",
              "name": "ipfsCID",
              "type": "string"
            }
          ],
          "internalType": "struct PasswordHut.Credential[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_ipfsCID",
          "type": "string"
        }
      ],
      "name": "updateExistingCredential",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];