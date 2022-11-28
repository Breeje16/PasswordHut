import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  DeletedCredential,
  ExistingCredentialUpdated,
  NewCredentialAdded
} from "../generated/PasswordHut/PasswordHut"

export function createDeletedCredentialEvent(
  owner: Address,
  credentialID: BigInt
): DeletedCredential {
  let deletedCredentialEvent = changetype<DeletedCredential>(newMockEvent())

  deletedCredentialEvent.parameters = new Array()

  deletedCredentialEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  deletedCredentialEvent.parameters.push(
    new ethereum.EventParam(
      "credentialID",
      ethereum.Value.fromUnsignedBigInt(credentialID)
    )
  )

  return deletedCredentialEvent
}

export function createExistingCredentialUpdatedEvent(
  owner: Address,
  credentialID: BigInt,
  ipfsCID: string
): ExistingCredentialUpdated {
  let existingCredentialUpdatedEvent = changetype<ExistingCredentialUpdated>(
    newMockEvent()
  )

  existingCredentialUpdatedEvent.parameters = new Array()

  existingCredentialUpdatedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  existingCredentialUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "credentialID",
      ethereum.Value.fromUnsignedBigInt(credentialID)
    )
  )
  existingCredentialUpdatedEvent.parameters.push(
    new ethereum.EventParam("ipfsCID", ethereum.Value.fromString(ipfsCID))
  )

  return existingCredentialUpdatedEvent
}

export function createNewCredentialAddedEvent(
  owner: Address,
  credentialID: BigInt,
  ipfsCID: string
): NewCredentialAdded {
  let newCredentialAddedEvent = changetype<NewCredentialAdded>(newMockEvent())

  newCredentialAddedEvent.parameters = new Array()

  newCredentialAddedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  newCredentialAddedEvent.parameters.push(
    new ethereum.EventParam(
      "credentialID",
      ethereum.Value.fromUnsignedBigInt(credentialID)
    )
  )
  newCredentialAddedEvent.parameters.push(
    new ethereum.EventParam("ipfsCID", ethereum.Value.fromString(ipfsCID))
  )

  return newCredentialAddedEvent
}
