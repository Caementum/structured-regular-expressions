import 'mocha';
import { expect } from "chai";
import { Document } from '../../document';
import { Line, Backward } from '../../addresses';
import { Address } from '../../address';

describe(Backward.name, () => {
    describe("2-1", () => {
        let address: Address = new Backward(new Line(2), new Line(1));

        describe("on multi line string", () => {
            let document = new Document("asdf\nfdsa\nasdf");
            let start = 0; let end = 5;
            it(`starts at ${start}`, () => {
                let range = address.getRange(document);
                expect(range).has.property("start").that.equals(start);
            });
            it(`ends at ${end}`, () => {
                let range = address.getRange(document);
                expect(range).has.property("end").that.equals(end);
            });
        });
    });
    describe("3-1", () => {
        let address: Address = new Backward(new Line(3), new Line(1));

        describe("on multi line string", () => {
            let document = new Document("asdf\nfdsa\nasdf");
            let start = 5; let end = 10;
            it(`starts at ${start}`, () => {
                let range = address.getRange(document);
                expect(range).has.property("start").that.equals(start);
            });
            it(`ends at ${end}`, () => {
                let range = address.getRange(document);
                expect(range).has.property("end").that.equals(end);
            });
        });
    });
});