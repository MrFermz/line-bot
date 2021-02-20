const carousel = [
  'carousel'
]

const carouselReply = [
  {
    altText: "this is a carousel template",
    template: {
      type: "carousel",
      columns: [
        {
          title: "Title",
          text: "Text",
          actions: [
            {
              type: "message",
              label: "Action 1",
              text: "Action 1"
            },
            {
              type: "message",
              label: "Action 2",
              text: "Action 2"
            }
          ]
        },
        {
          title: "Title",
          text: "Text",
          actions: [
            {
              type: "message",
              label: "Action 1",
              text: "Action 1"
            },
            {
              type: "message",
              label: "Action 2",
              text: "Action 2"
            }
          ]
        }
      ]
    }
  }
]

module.exports = { carousel, carouselReply }