const { expect } = require("chai");

describe("PasswordHut", function() {
    let PasswordHut;
    let hardhatPasswordHut;
    let owner;
    let addr1;
    let addr2;
    let addrs;

    beforeEach(async function () {
        PasswordHut = await ethers.getContractFactory("PasswordHut");
        [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
        hardhatPasswordHut = await PasswordHut.deploy();
    });

    describe("Adding Credentials", function () {
        it("Should add new Credential for msg Sender", async function () {
          await expect(hardhatPasswordHut.connect(addr1).addNewCredential("QmWYJTtxreTnAjZStk3BF9V73SuZU1YepqHumkcv7dRzC2"))
            .to.emit(hardhatPasswordHut, "NewCredentialAdded");
        });
    });

    // describe("Updating Credentials", function () {
    //     it("Should Update Existing Credential of msg Sender", async function () {
    //       await expect(hardhatPasswordHut.connect(addr1).updateExistingCredential(0,"QmWYJTtxreTnAjZStk3BF9V73SuZU1YepqHumkcv7dRzC3"))
    //         .to.emit(hardhatPasswordHut, "ExistingCredentialUpdated");
    //     });
    // });

    // describe("Deleting Credentials", function () {
    //     it("Should Delete Existing Credential of msg Sender", async function () {
    //       await expect(hardhatPasswordHut.connect(addr1).deleteCredential(0))
    //         .to.emit(hardhatPasswordHut, "DeletedCredential");
    //     });
    // });
});