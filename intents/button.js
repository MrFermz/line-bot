const button = [
  'button'
]

const buttonReply = [
  {
    altText: 'this is a buttons template',
    template: {
      type: "buttons",
      thumbnailImageUrl: "https://miro.medium.com/max/3648/1*Z40RUlwMP9bQGorLNxxfIg.png",
      imageAspectRatio: "rectangle",
      imageSize: "cover",
      imageBackgroundColor: "#FF0000",
      title: "Title",
      text: "Text",
      actions: [
        {
          type: "message",
          label: "label 1",
          text: "text 1"
        },
        {
          type: "uri",
          label: "label 2",
          uri: "https://github.com/"
        },
        {
          type: "uri",
          label: "label 3",
          uri: "line://app/101"
        },
        {
          type: "datetimepicker",
          label: "label 4",
          data: "Data 4",
          mode: "datetime",
          initial: "2020-12-30T00:29",
          max: "2021-12-30T00:29",
          min: "2019-12-30T00:29"
        }
      ]
    }
  }
]

module.exports = { button, buttonReply }