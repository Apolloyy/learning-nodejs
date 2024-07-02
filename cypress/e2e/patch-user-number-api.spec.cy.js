describe("testando api", () => {
  it("testando api que atualiza numero de usuarios", () => {
    cy.request({
      method: "PATCH",
      url: "http://localhost:3000/update/20/11111111",
      headers: {
        "Content-type": "application/json",
      },
    }).then((response) => {
      expect(response.status).to.eq(204);
    });
  });
});
