---
title: "Patron de arquitectura MVC(modelo-vista-controlador) que podes aprender aquí"
description: "Uno de los patrones de arquitectura más conocidos y útiles, aprenderás cómo implementarlo en el cliente y servidor"
layout: "../../../layouts/ArticlesLayout.astro"
---

**Subido:** _04 Diciembre 2024_  

<a href="/posts" class="return-page">Regresar a posts</a>

<br />

# **Cómo Implementar el Patrón de Arquitectura MVC**  

### **Introducción**  
El patrón de arquitectura MVC (Modelo-Vista-Controlador) es uno de los más populares para organizar aplicaciones tanto en el backend como en el frontend. Divide la aplicación en tres capas principales para mejorar la separación de responsabilidades, facilitar el mantenimiento y permitir la escalabilidad.  

<br />

### **1. Implementación en el Backend con Node.js y Express**  

#### **Modelo**  
El modelo define cómo interactuar con la base de datos. En un sistema con MongoDB, el modelo se crea con Mongoose:  

<br />

```typescript
import { Schema, model } from 'mongoose';

const TaskSchema = new Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

export const Task = model('Task', TaskSchema);
```
<br />


#### **Vista**  
En aplicaciones backend, las vistas suelen ser respuestas JSON o plantillas dinámicas.  
- **Ejemplo con JSON**:  

<br />

```typescript
res.json({ message: 'Task created', task });
```
<br />

- **Ejemplo con EJS**:  

<br />

```ejs
<!DOCTYPE html>
<html>
<head><title>Tareas</title></head>
<body>
  <h1><%= title %></h1>
</body>
</html>
```

<br />

#### **Controlador**  
El controlador maneja la lógica del negocio y las solicitudes HTTP.  

<br />

```typescript
import { Task } from '../models/Task';

export const getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};
```

<br />

#### **Rutas**  
Define las URL que conectan a los controladores.  
```typescript
import express from 'express';
import { getTasks } from './controllers/taskController';

const router = express.Router();
router.get('/tasks', getTasks);

export default router;
```

<br />

---

<br />

### **2. Implementación en el Frontend con React**  

<br />

#### **Modelo**  
El estado de la aplicación sirve como el modelo en React.  
```typescript
const [tasks, setTasks] = useState<Task[]>([]);
```

<br />

#### **Vista**  
La vista está compuesta por componentes que muestran datos al usuario.  
```jsx
const TaskList = ({ tasks }) => (
  <ul>
    {tasks.map(task => (
      <li key={task.id}>{task.title}</li>
    ))}
  </ul>
);
```

<br />

#### **Controlador**  
El controlador en React maneja eventos y llamadas a APIs.  
```typescript
const fetchTasks = async () => {
  const response = await fetch('/api/tasks');
  const data = await response.json();
  setTasks(data);
};
```
<br />


### **Integración Completa**  
```typescript
import React, { useEffect, useState } from 'react';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  return <TaskList tasks={tasks} />;
};

export default App;
```

<br />
