import { Linking, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <WebView
      source={{ uri: 'https://expo.dev/' }}
      onShouldStartLoadWithRequest={(request) => {
        if (request.url.includes('accounts.google.com')) {
          Linking.openURL(request.url);
          return false;
        }
        return true;
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});