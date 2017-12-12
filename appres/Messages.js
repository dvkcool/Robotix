import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem } from 'native-base';
import {Text } from 'react-native';
export default class Messages extends Component {
  render() {
    var items = ['1','2','3','4','5'];
    return (
      <Container>
        <Content>
          <List dataArray={items}
            renderRow={(item) =>
              <ListItem>
                <Text>Messages {item}</Text>
              </ListItem>
            }>
          </List>
        </Content>
      </Container>
    );
  }
}
