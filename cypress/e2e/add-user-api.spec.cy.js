describe("testando api", () => {
  it("testando api que cadastra usuarios", () => {
    const user = {
      nm_pessoa: "spec",
      nr_pessoa: "9999999",
    };

    cy.request({
      method: "POST",
      url: "http://localhost:3000/register",
      headers: {
        "Content-type": "application/json",
      },
      body: user,
    }).then((response) => {
      cy.log(response.body);
    });
  });
});
