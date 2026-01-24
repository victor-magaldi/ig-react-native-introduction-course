import { CameraView, useCameraPermissions } from 'expo-camera';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, Vibration, View } from 'react-native'; // <-- import Vibration

const { width, height } = Dimensions.get('window');

export default function BarcodeScannerWithSound() {
  const [permission, requestPermission] = useCameraPermissions();
  const [scannedData, setScannedData] = useState<string | null>(null);
  const [scanned, setScanned] = useState(false);

  if (!permission) {
    return <View><Text>Loading permission...</Text></View>;
  }

  if (!permission.granted) {
    return (
      <View style={styles.center}>
        <Text>Camera permission needed</Text>
        <Text onPress={requestPermission} style={{ color: 'blue', marginTop: 10 }}>Grant Permission</Text>
      </View>
    );
  }

  const handleBarcodeScanned = async (event: { data: string }) => {
    if (scanned) return;

    setScanned(true);
    setScannedData(event.data);
    console.log('Scanned:', event.data);

    // VIBRAÇÃO QUANDO O VALOR FOR DETECTADO
    Vibration.vibrate(500); // vibra por 500ms

    setTimeout(() => setScanned(false), 1500); // desbloqueia para próxima leitura
  };

  // Zona de leitura
  const boxWidth = width * 0.7;
  const boxHeight = height * 0.25;

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        barcodeScannerSettings={{ barcodeTypes: ["qr", "ean13", "code128", "ean8"] }}
        onBarcodeScanned={handleBarcodeScanned}
      />

      <View style={styles.overlay}>
        <View style={[styles.scanBox, { width: boxWidth, height: boxHeight }]} />
      </View>

      {scannedData && (
        <Text style={styles.text}>Scanned: {scannedData}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  camera: { flex: 1 },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanBox: {
    borderWidth: 3,
    borderColor: 'lime',
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  text: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    fontSize: 18,
    backgroundColor: '#fff',
    padding: 8,
  },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});
