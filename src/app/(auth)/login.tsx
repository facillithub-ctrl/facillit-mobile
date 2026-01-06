import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { styled } from 'nativewind';
import { supabase } from '../../services/supabase'; // Certifique-se de ter configurado o cliente
import { resolveError } from '../../core/errors/error-catalog'; // Catálogo de erros [cite: 316]

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledInput = styled(TextInput);
const StyledButton = styled(TouchableOpacity);

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleLogin() {
    setLoading(true);
    setErrorMsg(null);

    // Auth somente via Supabase Auth [cite: 225]
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      // Uso da biblioteca de erros para mensagem amigável [cite: 319, 322]
      const appError = resolveError(error);
      setErrorMsg(appError.userMessage);
      setLoading(false);
    } else {
      // Sucesso
      setLoading(false);
      // Navegar para o Hub principal (será implementado posteriormente)
      Alert.alert("Sucesso", "Login realizado com sucesso!");
    }
  }

  return (
    <StyledView className="flex-1 bg-white px-6 pt-20">
      {/* Header Simples */}
      <TouchableOpacity onPress={() => router.back()} className="mb-8 w-10">
        <MaterialIcons name="arrow-back" size={28} color="#000" />
      </TouchableOpacity>

      <StyledText className="text-3xl font-inter-bold text-black mb-2">
        Bem-vindo de volta
      </StyledText>
      <StyledText className="text-gray-500 font-inter text-base mb-10">
        Entre para continuar sua jornada de leitura.
      </StyledText>

      {/* Formulário */}
      <StyledView className="space-y-4 mb-6">
        <StyledView>
            <StyledText className="text-sm font-inter-medium text-gray-700 mb-2">E-mail</StyledText>
            <StyledInput 
            className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 font-inter text-gray-900 focus:border-brand-purple"
            placeholder="seu@email.com"
            placeholderTextColor="#9ca3af"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
            />
        </StyledView>

        <StyledView>
            <StyledText className="text-sm font-inter-medium text-gray-700 mb-2">Senha</StyledText>
            <StyledInput 
            className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 font-inter text-gray-900 focus:border-brand-purple"
            placeholder="Sua senha secreta"
            placeholderTextColor="#9ca3af"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            />
        </StyledView>
      </StyledView>

      {/* Feedback de Erro UI */}
      {errorMsg && (
        <StyledView className="bg-red-50 p-4 rounded-lg flex-row items-center mb-6 border border-red-100">
          <MaterialIcons name="error-outline" size={20} color="#ef4444" style={{ marginRight: 8 }} />
          <StyledText className="text-red-600 font-inter text-sm flex-1">
            {errorMsg}
          </StyledText>
        </StyledView>
      )}

      {/* Botão de Ação com Gradiente (Simulado via cor sólida ou lib de gradiente) */}
      {/* O documento [cite: 376] permite Gradiente em botões de destaque */}
      <StyledButton 
        className={`w-full py-4 rounded-xl items-center justify-center shadow-lg shadow-brand-purple/20 ${loading ? 'bg-brand-purple/70' : 'bg-brand-purple'}`}
        onPress={handleLogin}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#FFF" />
        ) : (
          <StyledText className="text-white font-inter-bold text-lg">
            Entrar
          </StyledText>
        )}
      </StyledButton>

      <StyledButton className="mt-6 items-center" onPress={() => console.log('Recuperar senha')}>
        <StyledText className="text-brand-purple font-inter-medium">
          Esqueci minha senha
        </StyledText>
      </StyledButton>
    </StyledView>
  );
}