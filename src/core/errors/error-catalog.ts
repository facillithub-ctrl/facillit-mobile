// Estrutura padronizada de erro
export interface AppError {
  code: string;
  technicalMessage: string; // Para logs/devs
  userMessage: string;      // Para a UI
}

// Catálogo Centralizado
export const ERROR_CATALOG = {
  // Erros de Autenticação (FHB-AUT-XXX)
  AUTH: {
    INVALID_CREDENTIALS: {
      code: 'FHB-AUT-001',
      technicalMessage: 'Supabase Auth: Invalid login credentials provided.',
      userMessage: 'E-mail ou senha incorretos. Verifique e tente novamente.'
    },
    USER_NOT_FOUND: {
      code: 'FHB-AUT-002',
      technicalMessage: 'Supabase Auth: User not found in database.',
      userMessage: 'Não encontramos uma conta com este e-mail.'
    },
    WEAK_PASSWORD: {
      code: 'FHB-AUT-003',
      technicalMessage: 'Supabase Auth: Password does not meet security requirements.',
      userMessage: 'Sua senha precisa ser mais forte (mínimo 6 caracteres).'
    }
  },
  // Erros Genéricos do Hub
  GENERAL: {
    NETWORK_ERROR: {
      code: 'FHB-GEN-001',
      technicalMessage: 'Network request failed.',
      userMessage: 'Sem conexão com a internet. Verifique seu sinal.'
    },
    UNKNOWN: {
      code: 'FHB-GEN-999',
      technicalMessage: 'Unhandled exception occurred.',
      userMessage: 'Algo deu errado. Tente novamente mais tarde.'
    }
  }
};

// Função helper para tratar erros do Supabase
export function resolveError(error: any): AppError {
  console.error(`[SYSTEM ERROR]:`, error); // Log técnico obrigatório
  
  // Mapeamento simples de erros do Supabase para nosso catálogo
  if (error.message?.includes('Invalid login credentials')) return ERROR_CATALOG.AUTH.INVALID_CREDENTIALS;
  
  return ERROR_CATALOG.GENERAL.UNKNOWN;
}