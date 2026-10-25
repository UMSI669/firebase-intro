import MessageList from '../components/MessageList';

test('uses the Firestore document ID as the rendered row key', () => {
  const message = { id: 'firestore-document-abc', text: 'A stable row', authorEmail: 'author@example.com' };
  const list = MessageList({ messages: [message], loading: false, error: '' });

  expect(list.props.keyExtractor(message)).toBe('firestore-document-abc');
});
