describe("testando api", () => {
  it("testando api que exibe os usuarios", () => {
    cy.request({
      method: "GET",
      url: "http://localhost:3000/",
      headers: {
        "Content-type": "application/json",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
