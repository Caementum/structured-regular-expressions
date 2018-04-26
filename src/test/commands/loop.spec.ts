import 'mocha';
import { expect } from "chai";
import { Document } from '../../document';
import { Loop, Print, Conditional, Command } from '../../commands';
import { Line, Span, Dot, End } from '../../addresses';

describe(Loop.name, () => {
    describe("0,$x/[&\\n]+/p", () => {
        let command: Command = new Loop(new Span(new Line(0), new End()), "[^\\n]+", new Print(new Dot()));
        describe("on one line string", () => {
            let document = new Document("asdf", [], []);
            it("prints 'asdf'", () => {
                let changed = command.exec(document);
                expect(changed)
                    .has.property("changes")
                    .is.an("array")
                    .that.has.property("length")
                    .that.equals(1);
                expect(changed.changes[0])
                    .has.property("text")
                    .that.equals("asdf");
            });
        });
        describe("on multi line string", () => {
            let document = new Document("asdf\nfdsa\nasdf", [], []);
            it("prints 'asdf','fdsa','adsf'", () => {
                let changed = command.exec(document);
                expect(changed)
                    .has.property("changes")
                    .is.an("array")
                    .that.has.property("length")
                    .that.equals(3);
                expect(changed.changes[0])
                    .has.property("text")
                    .that.equals("asdf");
                expect(changed.changes[1])
                    .has.property("text")
                    .that.equals("fdsa");
                expect(changed.changes[2])
                    .has.property("text")
                    .that.equals("asdf");
            });
        });
    });
    describe("0,$x/[&\\n]+/g/df/p", () => {
        let command: Command = new Loop(new Span(new Line(0), new End()), "[^\\n]+", new Conditional(new Dot(), "df", new Print(new Dot())));
        describe("on one line string", () => {
            let document = new Document("asdf", [], []);
            it("prints 'asdf'", () => {
                let changed = command.exec(document);
                expect(changed)
                    .has.property("changes")
                    .is.an("array")
                    .that.has.property("length")
                    .that.equals(1);
                expect(changed.changes[0])
                    .has.property("text")
                    .that.equals("asdf");
            });
        });
        describe("on multi line string", () => {
            let document = new Document("asdf\nfdsa\nasdf", [], []);
            it("prints 'asdf','adsf'", () => {
                let changed = command.exec(document);
                expect(changed)
                    .has.property("changes")
                    .is.an("array")
                    .that.has.property("length")
                    .that.equals(2);
                expect(changed.changes[0])
                    .has.property("text")
                    .that.equals("asdf");
                expect(changed.changes[1])
                    .has.property("text")
                    .that.equals("asdf");
            });
        });
    });
});