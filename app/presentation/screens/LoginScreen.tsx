import React, { Component } from 'react';
import { ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default class LoginScreen extends Component {
    render() {
        return (
            <ImageBackground className='flex-1' resizeMode='cover' source={require("../../../assets/images/bg.png")}>
                <View className='flex-1 bg-white/70 justify-center px-4 pt-10'>
                    <Text className='text-3xl font-bold text-gray-900 mb-2'>
                        Welcome Back
                    </Text>
                    <Text className='text-gray-500 mb-8'>
                        Sign in to continue
                    </Text>

                    <View className='mb-4'>
                        <TextInput className='border-b border-gray-600 rounded-xl px-4 py-3 text-base' placeholderTextColor="#525252" placeholder='Enter Email' />
                    </View>
                    <View className='mb-6'>
                        <TextInput className='border-b border-gray-600 rounded-xl px-4 py-3 text-base' placeholderTextColor="#525252" placeholder='Enter Password' secureTextEntry />
                    </View>
                    <TouchableOpacity className='bg-black py-4 rounded-xl items-center'>
                        <Text className='text-white font-semibold text-base'>Login</Text>
                    </TouchableOpacity>

                </View>
                <View className='justify-end  bg-white/70'>
                    <Text className='text-center text-gray-500 mb-10'>
                        Dont't have an account?{""}
                        <Text className='text-black font-semibold'>Sign up</Text>
                    </Text>
                </View>
            </ImageBackground>
        );
    }
}