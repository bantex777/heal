import { Text, TextInput, View } from "react-native";

type Props = {
    value: string;
    onChangeText: (text: string) => void;
    onBlur?: () => void;
    placeholder?: string;
    error?: string | null
};

export const AppTextInput = ({
    value, onChangeText, onBlur, placeholder, error
}: Props) => {
    return (
        <View className="mb-4">
            <TextInput
                value={value}
                onChangeText={onChangeText}
                onBlur={onBlur}
                placeholder={placeholder}
                placeholderTextColor="#525252"
                className={`border-b border-gray-600 rounded-xl px-4 py-3 text-base ${error ? "boder-red-500" : "border-gray-300"}`}
            />
            {error && (<Text className="mt-1 text-xs text-red-500">{error}</Text>)}
        </View>
    );
};