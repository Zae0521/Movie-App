import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { fallbackPersonImage, image185 } from '../api/moviedb'
import { fetchMovieCredits } from '../api/moviedb'


export default function Cast({ cast, navigation }) {
    let personName = 'Keanu Reeves'
    let characterName = 'John Wick'
    return (
        <View className="my-6">
            <Text className="text-white text-lg mx-4 mb-5">Top Cast</Text>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}
            >
                {
                    cast && cast.map((person, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                className="mr-4 items-center"
                                onPress={() => navigation.navigate('Person', person)}
                            >
                                <View className="overflow-hidden rounded-full h-20 w-20 items-center border border-neutral-500">
                                    <Image
                                        className="rounded-2xl h-24 w-20"
                                        source={{ uri: image185(person?.profile_path) || fallbackPersonImage }} />
                                </View>

                                <Text className="text-white text-xs mt-1">
                                    {
                                        person?.character > 10 ? person?.character.slice(0, 10) + "..." : person?.character
                                    }
                                </Text>
                                <Text className="text-neutral-400 text-xs mt-1">
                                    {
                                        person?.original_name.length > 10 ? person?.original_name.slice(0, 10) + "..." : person?.original_name
                                    }
                                </Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}