import MyCarousel from "./MyCarousel.vue";

describe("Vue Component test", () => {
it("HelloWorld vue component test", () => {
// mount the Component by passing required properties to the component
cy.mount(MyCarousel, { props: { msg: "Hello Vitest" } });
});
});