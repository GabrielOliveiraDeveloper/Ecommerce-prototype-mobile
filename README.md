# 📱 Ecommerce Prototype - Mobile

Versão mobile do projeto **Ecommerce Prototype**, desenvolvida com **React Native** + **Expo**. Este repositório é parte de um projeto maior que inclui [frontend web e backend](https://github.com/GabrielOliveiraDeveloper/ecommerce-prototype).

> ⚠️ **Status**: Projeto em desenvolvimento inicial

## 📋 Visão Geral

Este projeto é a implementação mobile da plataforma de e-commerce, fornecendo uma experiência nativa para usuários iOS e Android. Atualmente, a aplicação está na fase inicial de desenvolvimento com foco nas funcionalidades de autenticação (Login e Registro).

## 🏗️ Estrutura do Projeto

```
ecommerce-prototype-mobile/
├── app/
│   ├── _layout.tsx           # Layout raiz da aplicação (configuração Expo Router)
│   ├── index.tsx             # Redirecionamento para login
│   └── auth/
│       ├── Login.tsx         # Tela de login
│       └── Register.tsx      # Tela de registro
├── styles/
│   └── auth/
│       ├── Login.styles.ts     # Estilos da tela de login
│       └── Register.styles.ts  # Estilos da tela de registro
├── app.json                  # Configuração Expo
├── package.json              # Dependências do projeto
└── README.md                 # Este arquivo
```

## 🛠️ Tecnologias

| Tecnologia | Versão | Descrição |
|-----------|--------|-----------|
| **React Native** | 0.81.5 | Framework para desenvolvimento mobile |
| **Expo** | ~54.0.33 | Plataforma para desenvolvimento e deployment |
| **Expo Router** | ~6.0.23 | Roteamento baseado em arquivos |
| **React Hook Form** | ^7.76.0 | Gerenciamento de formulários |
| **Styled Components** | ^6.4.1 | CSS-in-JS para React Native |
| **Axios** | ^1.16.1 | Cliente HTTP para requisições |
| **TypeScript** | ~5.9.2 | Type safety |
| **React Navigation** | ^7.2.4 | Navegação entre telas |

## 📦 Instalação

### Pré-requisitos
- Node.js (versão 18+)
- npm ou yarn
- Expo CLI: `npm install -g expo-cli`

### Passos

1. **Clone o repositório**
```bash
git clone https://github.com/GabrielOliveiraDeveloper/ecommerce-prototype-mobile.git
cd ecommerce-prototype-mobile
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Inicie o servidor de desenvolvimento**
```bash
npm start
# ou
yarn start
```

4. **Execute em seu dispositivo ou emulador**

**Para Android:**
```bash
npm run android
```

**Para iOS:**
```bash
npm run ios
```

**Para Web:**
```bash
npm run web
```

## 🚀 Como Usar

### Iniciando a Aplicação

Após executar `npm start`, você verá um menu interativo no terminal:

- Pressione `a` para abrir no emulador Android
- Pressione `i` para abrir no emulador iOS
- Pressione `w` para abrir na web
- Escaneie o QR code com o app Expo Go no seu celular

### Navegação

A aplicação utiliza **Expo Router** com roteamento baseado em arquivos:

- `/` → Redirecionamento automático para `/auth/Login`
- `/auth/Login` → Tela de login
- `/auth/Register` → Tela de registro
- `/home` → Dashboard (em desenvolvimento)

## 🔐 Autenticação

### Login (`/auth/Login`)

Permite que usuários entrem com suas credenciais:

- **Email**: Campo validado para formato de email
- **Senha**: Campo seguro (secureTextEntry)
- **Requisição**: `POST http://localhost:3000/auth/login`

**Campos esperados:**
```typescript
{
  email: string;
  password: string;
}
```

### Registro (`/auth/Register`)

Permite criar novas contas de usuário:

- **Nome Completo**: Campo de texto
- **Email**: Campo validado para formato de email
- **Senha**: Mínimo 8 caracteres
- **Termos de Serviço**: Checkbox obrigatório
- **Requisição**: `POST http://localhost:3000/auth/register`

**Campos esperados:**
```typescript
{
  name: string;
  email: string;
  password: string;
  terms: boolean;
}
```

## 🎨 Estilos

Os estilos são organizados usando **Styled Components** para React Native:

```
styles/auth/
├── Login.styles.ts    # Componentes estilizados para Login
└── Register.styles.ts # Componentes estilizados para Register
```

### Paleta de Cores

- **Primária**: `#000000` (Preto)
- **Fundo**: `#ffffff` (Branco)
- **Texto Secundário**: `#6b7280` (Cinza)
- **Bordas**: `#e5e7eb` e `#f3f4f6` (Cinza claro)

### Componentes Estilizados

#### Login.styles.ts
- `Container` - Wrapper principal
- `Card` - Cartão com conteúdo
- `Title` - Título principal
- `Subtitle` - Subtítulo/descrição
- `Label` - Rótulo de campos
- `Input` - Campo de entrada
- `Button` - Botão de ação
- `ButtonText` - Texto do botão

#### Register.styles.ts
Inclui todos os componentes acima mais:
- `TermsContainer` - Container para termos de serviço
- `TermsText` - Texto dos termos

## 🔗 Integração com Backend

A aplicação se comunica com uma API backend em `http://localhost:3000`.

### Endpoints Utilizados

**Login**
```
POST /auth/login
Content-Type: application/json

{
  "email": "usuario@exemplo.com",
  "password": "senha123"
}
```

**Registro**
```
POST /auth/register
Content-Type: application/json

{
  "name": "João Silva",
  "email": "joao@exemplo.com",
  "password": "senha123",
  "terms": true
}
```

### Variáveis de Ambiente

Para alternar entre diferentes ambientes, crie um arquivo `.env` na raiz do projeto:

```env
API_BASE_URL=http://localhost:3000
```

Para usar no código:
```typescript
const API_BASE_URL = process.env.EXPO_PUBLIC_API_BASE_URL || 'http://localhost:3000';
const response = await axios.post(`${API_BASE_URL}/auth/login`, data);
```

## 📁 Repositórios Relacionados

Este projeto é a versão **mobile** de um projeto maior com três componentes:

- **[Ecommerce Prototype](https://github.com/GabrielOliveiraDeveloper/ecommerce-prototype)** - Repositório principal (Frontend Web + Backend)
- **[Frontend Web](https://github.com/GabrielOliveiraDeveloper/ecommerce-prototype)** - React / Next.js
- **[Backend API](https://github.com/GabrielOliveiraDeveloper/ecommerce-prototype)** - Node.js / Express
- **Ecommerce Prototype Mobile** - React Native + Expo (este repositório)

## 🚧 Funcionalidades em Desenvolvimento

- [x] Configuração inicial Expo + Router
- [x] Telas de Login e Registro
- [x] Integração com API de autenticação
- [x] Validação de formulários com React Hook Form
- [x] Navegação básica
- [ ] Dashboard/Home
- [ ] Listagem de produtos
- [ ] Carrinho de compras
- [ ] Checkout
- [ ] Perfil de usuário
- [ ] Autenticação persistente (AsyncStorage)
- [ ] Tratamento de erros melhorado
- [ ] Notificações push

## 📝 Notas de Desenvolvimento

### Observações Importantes

1. **URL da API**: Atualmente configurada para `http://localhost:3000`. Ajuste conforme necessário para seu ambiente.

2. **Segurança**: As credenciais de login são enviadas em texto plano. Para produção, considere:
   - Usar HTTPS
   - Implementar JWT tokens
   - Armazenar tokens no AsyncStorage de forma segura
   - Implementar refresh tokens

3. **Erros**: Atualmente os erros exibem alertas genéricos. Para melhor UX, implemente:
   - Tratamento específico de erros
   - Mensagens de erro mais descritivas
   - Toast notifications

4. **Formulários**: Adicione validações mais robustas:
   - Validação de email em tempo real
   - Requisitos de senha
   - Confirmação de senha

## 🐛 Troubleshooting

### Erro: "Cannot connect to localhost:3000"

Certifique-se de que:
- O backend está rodando em `http://localhost:3000`
- Se estiver usando dispositivo físico, altere para o IP da máquina (ex: `http://192.168.1.100:3000`)

### Erro: "Metro bundler error"

Limpe o cache do Expo:
```bash
expo start -c
```

### Erro: "Styled Components Native not found"

Reinstale as dependências:
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📚 Recursos Úteis

- [Documentação Expo](https://docs.expo.dev/)
- [Expo Router](https://docs.expo.dev/routing/introduction/)
- [React Native Docs](https://reactnative.dev/)
- [Styled Components](https://styled-components.com/)
- [React Hook Form](https://react-hook-form.com/)

## 👥 Autor

**Gabriel Oliveira**
- GitHub: [@GabrielOliveiraDeveloper](https://github.com/GabrielOliveiraDeveloper)

## 📄 Licença

Este projeto é parte do repositório [ecommerce-prototype](https://github.com/GabrielOliveiraDeveloper/ecommerce-prototype).

## 🤝 Contribuindo

Para contribuir com este projeto:

1. Faça um fork
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

<div align="center">

**[⬆ Voltar ao topo](#-ecommerce-prototype---mobile)**

</div>
