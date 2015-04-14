describe("A calculator", function() {
    
    it("can add 1 and 1 together", function() {
        expect(add(1, 1)).toEqual(2);
    });

    it("can add 2 and 2 together", function() {
        expect(add(2, 2)).toEqual(4);
    });

    it("can subtract 1 from 1", function() {
        expect(subtract(1, 1)).toEqual(0);
    });

    it("can subtract 2 from 4", function() {
        expect(subtract(2, 4)).toEqual(2);
    });
});
