# CI/CD Pipeline - Wedding Invitation

Este proyecto tiene configurado un pipeline de CI/CD usando GitHub Actions que se ejecuta automáticamente en cada push y pull request.

## 🚀 Flujo del Pipeline

### 1. **Trigger Events**
- **Push** a las ramas `main` o `develop`
- **Pull Request** hacia las ramas `main` o `develop`

### 2. **Jobs del Pipeline**

#### **Job: Test**
- **Propósito**: Ejecutar tests, linting y build
- **Node.js Versiones**: 18.x y 20.x (matriz de testing)
- **Pasos**:
  1. Checkout del código
  2. Setup de Node.js
  3. Instalación de dependencias (`npm ci`)
  4. Ejecución del linter (`npm run lint`)
  5. Ejecución de tests (`npm run test:run`)
  6. Build del proyecto (`npm run build`)
  7. Upload de resultados de tests como artifacts

#### **Job: Deploy Preview** (solo en Pull Requests)
- **Propósito**: Crear una preview del build para revisión
- **Trigger**: Solo en Pull Requests
- **Pasos**:
  1. Build del proyecto
  2. Upload de artifacts de build

#### **Job: Deploy Production** (solo en main)
- **Propósito**: Preparar para deploy a producción
- **Trigger**: Solo en push a `main`
- **Pasos**:
  1. Build del proyecto
  2. Upload de artifacts de build (retención de 30 días)

## 🧪 Tests Configurados

### Tests Unitarios
- **Framework**: Vitest
- **Testing Library**: React Testing Library
- **Archivos de test**:
  - `src/App.test.jsx` - Tests del componente principal
  - `src/hooks/useWeddingStore.test.js` - Tests del hook personalizado

### Comandos de Test
```bash
npm test          # Ejecuta tests en modo watch
npm run test:ui   # Ejecuta tests con interfaz visual
npm run test:run  # Ejecuta tests una vez (usado en CI)
```

## 📁 Estructura de Archivos

```
.github/
└── workflows/
    └── ci.yml           # Configuración del pipeline

src/
├── test/
│   └── setup.js         # Configuración de tests
├── App.test.jsx         # Tests del componente App
└── hooks/
    └── useWeddingStore.test.js  # Tests del hook
```

## 🔧 Configuración

### Vite Config
```javascript
// vite.config.js
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
  },
})
```

### Package.json Scripts
```json
{
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:run": "vitest run"
  }
}
```

## 🚀 Cómo Usar

1. **Hacer cambios en tu código**
2. **Crear una rama** para tus cambios
3. **Hacer commit y push** de tus cambios
4. **Crear un Pull Request** hacia `main` o `develop`
5. **El pipeline se ejecutará automáticamente**

## 📊 Monitoreo

- Ve a la pestaña **Actions** en tu repositorio de GitHub
- Cada ejecución del pipeline se muestra con su estado
- Puedes ver logs detallados de cada paso
- Los artifacts se pueden descargar desde la interfaz de GitHub

## 🔍 Troubleshooting

### Tests Fallan
1. Ejecuta `npm run test:run` localmente
2. Revisa los logs en GitHub Actions
3. Asegúrate de que todos los mocks estén configurados correctamente

### Build Falla
1. Ejecuta `npm run build` localmente
2. Verifica que no haya errores de sintaxis
3. Revisa las dependencias

### Linter Falla
1. Ejecuta `npm run lint` localmente
2. Corrige los errores de linting
3. Considera usar `npm run lint --fix` para correcciones automáticas

## 📈 Próximos Pasos

- [ ] Agregar coverage de tests
- [ ] Configurar deploy automático a Vercel/Netlify
- [ ] Agregar tests de integración
- [ ] Configurar notificaciones de Slack/Email
- [ ] Agregar análisis de seguridad de dependencias
