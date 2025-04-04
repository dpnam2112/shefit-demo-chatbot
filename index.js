let chatClient;

function startChat() {
    if (!chatClient) {
        chatClient = new CozeWebSDK.WebChatClient({
            /**
            * Agent configuration information.
            * @param config.bot_id - Agent ID.
            */
            config: {
              bot_id: '7486049271679500306',
            },
            componentProps: {
              title: 'CyHome',
            },
            /**
            * The auth property is used to configure the authentication method.
            * @param type - Authentication method, default type is 'unauth', which means no authentication is required; it is recommended to set it to 'token', which means authentication is done through PAT (Personal Access Token) or OAuth.
            * @param token - When the type is set to 'token', you need to configure the PAT (Personal Access Token) or OAuth access key.
            * @param onRefreshToken - When the access key expires, a new key can be set as needed.
            */
           
            /**
            * The userInfo parameter is used to set the display of agent user information in the chat box.
            * @param userInfo.id - ID of the agent user.
            * @param userInfo.url - URL address of the user's avatar.
            * @param userInfo.nickname - Nickname of the agent user.
            */
            userInfo: { 
              id: 'user', 
              url: 'https://cdn-icons-png.flaticon.com/512/7891/7891470.png', 
              nickname: 'Khách hàng', 
            }, 
            ui: { 
              base: { 
                icon: 'https://play-lh.googleusercontent.com/uRB5JlZPQclneorj-nj7yr9cv33n8_-Ore7ehkYLz9Qpd2wAaO48npJS67FBmL1kawpW=w480-h960-rw', 
                lang: 'vi',
              },
              chatBot: {
                title: 'CyHome',
                uploadable: false,
              }, 
              /**
              * Controls whether to display the floating ball at the bottom right corner of the page.
              */
              asstBtn: { 
                isNeed: true, 
              }, 
              footer: {
                  isShow: false,
                  
              }
          },
          });
    }
}

window.onload = startChat; 
