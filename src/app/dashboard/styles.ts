import styled from 'styled-components/native';

export const Container = styled.View`
flex: 1;
justify-content: center;
align-items: center;
 background-color: ${({ theme }) => theme.colors.background};
`;
 
export const Title = styled.Text`
font-size: 20px;
font-weight: 600;
 color: ${({ theme }) => theme.colors.title};
`;