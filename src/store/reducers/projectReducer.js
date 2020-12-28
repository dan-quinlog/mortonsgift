const initState = {
  projects: [
    {
      id: "1",
      price: "10.95",
      title: "first project",
      content: "blah blarg honk",
    },
    {
      id: "2",
      price: "100.95",
      title: "second project",
      content: "some text",
    },
    {
      id: "3",
      price: "0.95",
      title: "best thing I ever did",
      content: "crazier days have happened",
    },
  ],
};
const projectReducer = (state = initState, action) => {
  return state;
};
export default projectReducer;
