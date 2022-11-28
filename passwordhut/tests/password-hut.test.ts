import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { DeletedCredential } from "../generated/schema"
import { DeletedCredential as DeletedCredentialEvent } from "../generated/PasswordHut/PasswordHut"
import { handleDeletedCredential } from "../src/password-hut"
import { createDeletedCredentialEvent } from "./password-hut-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let owner = Address.fromString("0x0000000000000000000000000000000000000001")
    let credentialID = BigInt.fromI32(234)
    let newDeletedCredentialEvent = createDeletedCredentialEvent(
      owner,
      credentialID
    )
    handleDeletedCredential(newDeletedCredentialEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("DeletedCredential created and stored", () => {
    assert.entityCount("DeletedCredential", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "DeletedCredential",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "owner",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "DeletedCredential",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "credentialID",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
