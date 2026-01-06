import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledButton = styled(TouchableOpacity);

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <StyledView className="flex-1 bg-white px-6 justify-center items-center">
      {/* Logo ou Brand Placeholder */}
      <StyledView className="mb-12 items-center">
        <StyledView className="w-20 h-20 bg-brand-purple rounded-2xl items-center justify-center mb-4 shadow-lg shadow-brand-purple/30">
           <MaterialIcons name="auto-stories" size={40} color="#07f49e" />
        </StyledView>
        <StyledText className="text-3xl font-inter-bold text-black text-center">
          Facillit Hub
        </StyledText>
        <StyledText className="text-gray-500 font-inter text-center mt-2 px-8">
          Sua identidade educacional e literária em um só lugar.
        </StyledText>
      </StyledView>

      {/* Opção 1: Pessoal - "Vamos lá" [cite: 403] */}
      <StyledButton 
        className="w-full bg-brand-purple py-4 rounded-xl mb-4 flex-row justify-center items-center shadow-md shadow-brand-purple/20"
        onPress={() => router.push('/(auth)/login')} // Redireciona para Login/Cadastro Pessoal
        activeOpacity={0.9}
      >
        <StyledText className="text-white font-inter-bold text-lg mr-2">
          Vamos lá
        </StyledText>
        <MaterialIcons name="arrow-forward" size={24} color="#FFF" />
      </StyledButton>

      {/* Opção 2: Institucional - "Tenho um código" [cite: 403] */}
      <StyledButton 
        className="w-full bg-white border border-gray-200 py-4 rounded-xl flex-row justify-center items-center"
        onPress={() => console.log('Fluxo Institucional')} // Implementar fluxo de código depois
        activeOpacity={0.7}
      >
        <MaterialIcons name="qr-code" size={24} color="#42047e" style={{ marginRight: 8 }} />
        <StyledText className="text-gray-900 font-inter-medium text-lg">
          Tenho um código
        </StyledText>
      </StyledButton>

      {/* Rodapé Seguro */}
      <StyledText className="absolute bottom-10 text-gray-400 text-xs font-inter">
        Facillit Stories • Baseado em "Clean White" Design 
      </StyledText>
    </StyledView>
  );
}