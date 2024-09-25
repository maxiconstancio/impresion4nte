Modelo Entidad-Relación
Entidades Principales
Usuarios: Información de los usuarios del sistema.
Roles: Diferentes roles que pueden tener los usuarios (administrador, operador, cliente).
Pedidos: Información de los pedidos de impresiones 3D.
Productos: Detalles de los productos disponibles para la impresión.
Stock: Cantidades de productos en inventario.
Tareas Pendientes: Tareas relacionadas con los pedidos.
Precios: Cálculo de precios basado en materiales, tiempo de impresión, etc.
Presupuestos: Estimaciones de costos para los pedidos.
Compras: Registro de compras de materiales.
Ventas: Registro de ventas realizadas.
Relaciones
Usuarios - Roles

Relación: Muchos a muchos
Detalles: Un usuario puede tener múltiples roles y un rol puede ser asignado a múltiples usuarios.
Tablas involucradas: Usuarios, Roles, Usuario_Rol
Pedidos - Usuarios

Relación: Muchos a uno
Detalles: Un pedido es realizado por un usuario (cliente).
Tablas involucradas: Pedidos, Usuarios
Pedidos - Productos

Relación: Muchos a muchos
Detalles: Un pedido puede incluir múltiples productos y un producto puede ser parte de múltiples pedidos.
Tablas involucradas: Pedidos, Productos, Pedido_Producto
Productos - Stock

Relación: Uno a uno
Detalles: Cada producto tiene un registro de stock asociado.
Tablas involucradas: Productos, Stock
Pedidos - Tareas Pendientes

Relación: Uno a muchos
Detalles: Un pedido puede tener múltiples tareas pendientes.
Tablas involucradas: Pedidos, Tareas_Pendientes
Pedidos - Precios

Relación: Uno a uno
Detalles: Cada pedido tiene un precio calculado.
Tablas involucradas: Pedidos, Precios
Pedidos - Presupuestos

Relación: Uno a uno
Detalles: Cada pedido puede tener un presupuesto asociado.
Tablas involucradas: Pedidos, Presupuestos
Compras - Proveedores

Relación: Muchos a uno
Detalles: Cada compra se realiza a un proveedor específico.
Tablas involucradas: Compras, Proveedores
Ventas - Clientes

Relación: Muchos a uno
Detalles: Cada venta se realiza a un cliente específico.
Tablas involucradas: Ventas, Clientes
Esquema Detallado de Tablas y Relaciones
Usuarios
id: Integer, Primary Key
nombre: String
email: String
contraseña: String
Roles
id: Integer, Primary Key
nombre: String
Usuario_Rol
usuario_id: Integer, Foreign Key (Usuarios.id)
rol_id: Integer, Foreign Key (Roles.id)
Pedidos
id: Integer, Primary Key
usuario_id: Integer, Foreign Key (Usuarios.id)
fecha: Date
estado: String
Productos
id: Integer, Primary Key
nombre: String
descripcion: String
Pedido_Producto
pedido_id: Integer, Foreign Key (Pedidos.id)
producto_id: Integer, Foreign Key (Productos.id)
cantidad: Integer
Stock
producto_id: Integer, Primary Key, Foreign Key (Productos.id)
cantidad: Integer
Tareas_Pendientes
id: Integer, Primary Key
pedido_id: Integer, Foreign Key (Pedidos.id)
descripcion: String
estado: String
Precios
pedido_id: Integer, Primary Key, Foreign Key (Pedidos.id)
monto: Decimal
Presupuestos
pedido_id: Integer, Primary Key, Foreign Key (Pedidos.id)
monto: Decimal
fecha_validez: Date
Compras
id: Integer, Primary Key
proveedor_id: Integer, Foreign Key (Proveedores.id)
fecha: Date
total: Decimal
Proveedores
id: Integer, Primary Key
nombre: String
contacto: String
Ventas
id: Integer, Primary Key
cliente_id: Integer, Foreign Key (Clientes.id)
fecha: Date
total: Decimal
Clientes
id: Integer, Primary Key
nombre: String
email: String