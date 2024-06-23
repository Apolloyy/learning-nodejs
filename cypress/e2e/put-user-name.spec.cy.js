describe("testando api", () => {
  it("testando api que atualiza nome de usuarios", () => {
    cy.request({
      method: "PUT",
      url: "http://localhost:3000/update/11/Apollo/3333333",
      headers: {
        "Content-type": "application/json",
      },
    }).then((response) => {
      cy.log(response.body);
    });
  });
});
