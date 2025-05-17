import React from 'react';
import styled from 'styled-components';
import Container from '../components/Container';
import { CircleAlert } from 'lucide-react';

const Title = styled.h1`
    font-size: 2.5rem;
    color: #4f46e5;
    margin-bottom: 1rem;
`;

const Subtitle = styled.h2`
    font-size: 1.25rem;
    color: #64748b;
    margin-bottom: 2rem;
    font-weight: 400;
`;

const List = styled.ul`
    list-style: none;
    padding: 0;
    margin-bottom: 2rem;
`;

const ListItem = styled.li`
    font-size: 1rem;
    color: gray;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    background-color: #161616;
    border-radius: 0.2rem;
`;

const Footer = styled.footer`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 2rem;
    font-size: 0.9rem;
    color: #94a3b8;
`;

const Code = styled.code`
    background-color: #0c0f14;
    color: #bdbcbc;
    margin: 0 0.2rem;
    font-size: 0.9rem;
    padding: 0.2rem 0.4rem;
    border-radius: 0.2rem;
`;

const Template: React.FC = () => (
    <Container>
        <Title>Template React + Vite + TypeScript + Styled-Components + Electron</Title>
        <Subtitle>
            Template feito com propósito de poupar tempo em estudos com React + Electron.
        </Subtitle>
        <List>
            <ListItem>1. React + TypeScript</ListItem>
            <ListItem>2. Styled-components para estilização</ListItem>
            <ListItem>3. Electron para integração desktop</ListItem>
            <ListItem>4. React Router para navegação</ListItem>
            <ListItem>5. Estrutura de pastas simples e GlobalStyle já pronto</ListItem>
            <ListItem>6. Lucide React para icones</ListItem>
            <ListItem>7. Montserrat como fonte padrão</ListItem>
        </List>
        <Subtitle>Instruções para uso</Subtitle>
        <List>
            <ListItem>1. Instale as dependências com <Code>npm install</Code></ListItem>
            <ListItem>2. Edite a resolução da janela em <Code>main.js</Code></ListItem>
            <ListItem>3. Inicie o React com <Code>npm run dev</Code></ListItem>
            <ListItem>4. Inicie o Electron com <Code>npm run electron</Code></ListItem>
            <ListItem>5. Para iniciar o React e Electron juntos, use <Code>npm run dev:electron</Code></ListItem>
        </List>
        <Footer>
            <CircleAlert /> Edite ou exclua esta página em <Code>src/pages/Template.tsx</Code> para começar.
            <br />
            <span id="node-version">Node version: {process.versions.node}</span>
            <span id="electron-version">Electron version: {process.versions.electron}</span>
            <span id="chrome-version">Chrome version: {process.versions.chrome}</span>
        </Footer>
    </Container>
);

export default Template;