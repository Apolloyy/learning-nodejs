describe("testando api", () => {
  it("testando api que atualiza nome de usuarios", () => {
    cy.request({
      method: "PATCH",
      url: "http://localhost:3000/update/18/Apollo",
      headers: {
        "Content-type": "application/json",
      },
    }).then((response) => {
      cy.log(response.body);
    });
  });
});
