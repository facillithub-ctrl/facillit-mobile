import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Modal, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledButton = styled(TouchableOpacity);
const StyledText = styled(Text);

export function AccessibilityFab() {
  const [modalVisible, setModalVisible] = useState(false);

  // Aqui integraríamos com o Contexto de Acessibilidade (Tamanho da fonte, contraste, etc)
  
  return (
    <>
      {/* FAB - Canto Inferior Direito */}
      <StyledButton 
        className="absolute bottom-8 right-6 w-14 h-14 bg-white rounded-full items-center justify-center shadow-lg border border-gray-200 z-50"
        onPress={() => setModalVisible(true)}
        accessibilityLabel="Abrir menu de acessibilidade"
        activeOpacity={0.8}
      >
        <MaterialIcons name="accessibility" size={28} color="#42047e" />
      </StyledButton>

      {/* Modal de Controles */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <StyledView className="flex-1 justify-end bg-black/50">
          <StyledView className="bg-white rounded-t-3xl p-6 h-[50%] shadow-2xl">
            <StyledView className="flex-row justify-between items-center mb-6">
              <StyledText className="text-xl font-bold text-gray-900 font-inter">
                Acessibilidade
              </StyledText>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <MaterialIcons name="close" size={24} color="#000" />
              </TouchableOpacity>
            </StyledView>

            {/* Controles (Exemplos iniciais) */}
            <StyledView className="space-y-4">
              <StyledView className="flex-row justify-between items-center p-4 bg-gray-50 rounded-xl">
                <StyledText className="text-base font-inter text-gray-700">Tamanho da Fonte</StyledText>
                <StyledView className="flex-row gap-4">
                   <MaterialIcons name="text-decrease" size={24} color="#42047e" />
                   <MaterialIcons name="text-increase" size={24} color="#42047e" />
                </StyledView>
              </StyledView>
              
              <StyledView className="flex-row justify-between items-center p-4 bg-gray-50 rounded-xl">
                 <StyledText className="text-base font-inter text-gray-700">Alto Contraste</StyledText>
                 <MaterialIcons name="contrast" size={24} color="#42047e" />
              </StyledView>
            </StyledView>

          </StyledView>
        </StyledView>
      </Modal>
    </>
  );
}