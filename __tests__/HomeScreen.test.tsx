import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {RouteProp, useNavigation} from '@react-navigation/native'; // Import useNavigation
import HomeScreen from '../src/screens/homescreen/HomeScreen';
import {RootStackParamList} from '../src/navigation/RootStackParamList'; // Adjust path as needed

// Define a mock for the RouteProp
const mockRoute: RouteProp<RootStackParamList, 'Home'> = {
  key: 'mock-key',
  name: 'Home',
  params: {capturedImage: undefined}, // Add params object with capturedImage as undefined
};

// Mocking CameraRoll module
jest.mock('@react-native-camera-roll/camera-roll', () => ({
  CameraRoll: {
    getPhotos: jest.fn(() => Promise.resolve({edges: []})),
  },
}));

// Mocking useNavigation hook
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: jest.fn(),
}));

describe('HomeScreen', () => {
  beforeEach(() => {
    // Mock the useNavigation hook to return a mocked navigation object
    (useNavigation as jest.Mock).mockReturnValue({
      navigate: jest.fn(),
    });
  });

  test('renders welcome message', async () => {
    const {getByText} = render(<HomeScreen route={mockRoute} />);
    const welcomeMessage = getByText('Welcome to the Gallery App');
    expect(welcomeMessage).toBeTruthy();
  });

  test('calls fetchAlbumPhotos and renders photos', async () => {
    const mockPhotos = [
      {node: {image: {uri: 'example-uri-1'}}},
      {node: {image: {uri: 'example-uri-2'}}},
    ];

    // Mocking CameraRoll.getPhotos implementation
    jest
      .spyOn(
        require('@react-native-camera-roll/camera-roll').CameraRoll,
        'getPhotos',
      )
      .mockImplementationOnce(() => Promise.resolve({edges: mockPhotos}));

    const {getByTestId} = render(<HomeScreen route={mockRoute} />);
    const photo1 = getByTestId('photo-0');
    const photo2 = getByTestId('photo-1');

    expect(photo1).toBeTruthy();
    expect(photo2).toBeTruthy();
  });

  test('navigates to Camera screen when openCamera is called', async () => {
    const {getByText} = render(<HomeScreen route={mockRoute} />);
    const cameraButton = getByText('Open Camera');

    fireEvent.press(cameraButton);
    expect(useNavigation().navigate).toHaveBeenCalledWith('Camera');
  });

  test('navigates to Gallery screen when viewMoreImages is called', async () => {
    const {getByText} = render(<HomeScreen route={mockRoute} />);
    const viewMoreButton = getByText('View More Images >');

    fireEvent.press(viewMoreButton);
    expect(useNavigation().navigate).toHaveBeenCalledWith('Gallery');
  });
});
