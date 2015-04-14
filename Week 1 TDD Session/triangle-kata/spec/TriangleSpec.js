describe("Triangle", function() {

  describe("when one side is less than or equal to zero", function() {
    var triangle = new Triangle(1,0,1)

    it("should not be a valid triangle", function() {
      expect(triangle.isValidTriangle()).toBeFalsy();
    });

    describe("when all three sides are equal", function() {
      var triangle = new Triangle(2,2,2)

      it("should be a valid triangle", function() {
        expect(triangle.isValidTriangle()).toBeTruthy();
      });

    });
  });
});
