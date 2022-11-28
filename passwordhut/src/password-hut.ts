import { Bytes, ipfs, json } from "@graphprotocol/graph-ts"
import {
  DeletedCredential,
  ExistingCredentialUpdated,
  NewCredentialAdded
} from "../generated/PasswordHut/PasswordHut"
import { Credential } from "../generated/schema"

export function handleNewCredentialAdded(event: NewCredentialAdded): void {
  let credential = new Credential(event.params.owner.toHex() + "-" + event.params.credentialID.toString());

  credential.owner = event.params.owner;
  credential.credentialID = event.params.credentialID.toString();
  credential.status = true;
  credential.ipfsCID = event.params.ipfsCID;  
  
  let ipfsCID = ipfs.cat(event.params.ipfsCID);
  if (ipfsCID) {
    const value = json.fromBytes(ipfsCID).toObject();
    if (value) {
      const encryptedCred = value.get("encryptedString");
      const encryptedKey = value.get("encryptedSymmetricKey");
      if (encryptedCred) credential.encryptedCred = encryptedCred.toString();
      if (encryptedKey) credential.encryptedKey = encryptedKey.toString();
    }
  }
  credential.timestamp = event.block.timestamp;
  credential.save();
}


export function handleExistingCredentialUpdated(event: ExistingCredentialUpdated): void {
  let credential = Credential.load(event.params.owner.toHex() + "-" + event.params.credentialID.toString());
  if (!credential) {
    credential = new Credential(event.params.owner.toHex() + "-" + event.params.credentialID.toString());
    credential.credentialID = event.params.credentialID.toString();
    credential.owner = event.params.owner;
    credential.status = true;
  }
  credential.ipfsCID = event.params.ipfsCID;
  let ipfsData = ipfs.cat(event.params.ipfsCID);
  if (ipfsData) {
    const value = json.fromBytes(ipfsData).toObject();
    if (value) {
      const encryptedCred = value.get("encryptedString");
      const encryptedKey = value.get("encryptedSymmetricKey");
      if (encryptedCred) credential.encryptedCred = encryptedCred.toString();
      if (encryptedKey) credential.encryptedKey = encryptedKey.toString();
    }
  }
  credential.timestamp = event.block.timestamp;
  credential.save();
}


export function handleDeletedCredential(event: DeletedCredential): void {
  let credential = Credential.load(event.params.owner.toHex() + "-" + event.params.credentialID.toString());
  if (credential) {
    credential.status = false;
    credential.timestamp = event.block.timestamp;
    credential.save();
  }
}

