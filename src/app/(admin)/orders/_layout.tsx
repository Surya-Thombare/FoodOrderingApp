
import { Stack } from "expo-router";



export default function MenuStack () {
    return (
        <Stack screenOptions={{
            
        }}>
            <Stack.Screen
                name="list"
                options={{
                    // title: "Orders"
                    headerShown: false,
                }}
            />
        </Stack>
    )
}