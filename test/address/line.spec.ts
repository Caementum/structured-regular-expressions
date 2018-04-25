import 'mocha';
import { expect } from "chai";
import { Line } from '../../src/address/line';
import { Address } from '../../src/address/address';
import { Document } from '../../src/models/document';

describe(Line.name, () => {
    describe("0", () => {
        let address: Address = new Line(0).forwardFromPosition(0);
        describe("on empty string", () => {
            let document = new Document("", []);
            let start = 0; let end = 0;
            it(`starts at ${start}`, () => {
                let range = address.getRange(document);
                expect(range).has.property("start").that.equals(start);
            });
            it(`ends at ${end}`, () => {
                let range = address.getRange(document);
                expect(range).has.property("end").that.equals(end);
            });
        });
        describe("on one line string", () => {
            let document = new Document("asdf", []);
            let start = 0; let end = 0;
            it(`starts at ${start}`, () => {
                let range = address.getRange(document);
                expect(range).has.property("start").that.equals(start);
            });
            it(`ends at ${end}`, () => {
                let range = address.getRange(document);
                expect(range).has.property("end").that.equals(end);
            });
        });
        describe("on multi line string", () => {
            let document = new Document("asdf\nfdsa\nasdf", []);
            let start = 0; let end = 0;
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
    describe("1", () => {
        let address = new Line(1).forwardFromPosition(0);
        describe("on empty string", () => {
            let document = new Document("", []);
            let start = 0; let end = 0;
            it(`starts at ${start}`, () => {
                let range = address.getRange(document);
                expect(range).has.property("start").that.equals(start);
            });
            it(`ends at ${end}`, () => {
                let range = address.getRange(document);
                expect(range).has.property("end").that.equals(end);
            });
        });
        describe("on one line string", () => {
            let document = new Document("asdf", []);
            let start = 0; let end = 4;
            it(`starts at ${start}`, () => {
                let range = address.getRange(document);
                expect(range).has.property("start").that.equals(start);
            });
            it(`ends at ${end}`, () => {
                let range = address.getRange(document);
                expect(range).has.property("end").that.equals(end);
            });
        });
        describe("on multi line string", () => {
            let document = new Document("asdf\nfdsa\nasdf", []);
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
});