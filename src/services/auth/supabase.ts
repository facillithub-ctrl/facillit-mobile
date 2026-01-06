import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

// Acesso direto via process.env com os novos prefixos do Expo
const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_KEY as string;

// Validação simples para evitar erros silenciosos em desenvolvimento
if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    '[Supabase] ERRO CRÍTICO: Variáveis de ambiente não encontradas. Verifique se o arquivo .env existe e se as chaves começam com EXPO_PUBLIC_.'
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});