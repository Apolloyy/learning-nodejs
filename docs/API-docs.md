### learning-nodejs - api docs

| Método | Endpoint                                            | Descrição                                    | Requisição      |
| ------ | --------------------------------------------------- | -------------------------------------------- | --------------- |
| GET    | `http://localhost:3000/`                            | Obter informações gerais sobre a API.        | Sem parâmetros. |
| POST   | `http://localhost:3000/register`                    | Registrar um novo usuário.                   |                 |
| PATCH  | `http://localhost:3000/update/{id}/{name}`          | Atualizar o nome do usuário com ID           |                 |
| PATCH  | `http://localhost:3000/update/{id}/{number}`        | Atualizar o número do usuário com ID.        |                 |
| PUT    | `http://localhost:3000/update/{id}/{name}/{number}` | Atualizar o nome e número do usuário com ID. |                 |

---

#### <font color="#33be39">GET</font> users

`http://localhost:3000/`

| HTTP Status Code                       |
| -------------------------------------- |
| <font color="#49aa29"><b>200<b></font> |

Request (application/json)

```json
{ "id_pessoa": 1, "nm_pessoa": "Teste", "nr_pessoa": "44444444" }, { "id_pessoa": 2, "nm_pessoa": "22224444", "nr_pessoa": "88888888A" }, { "id_pessoa": 3, "nm_pessoa": "teste", "nr_pessoa": "88888888" }, { "id_pessoa": 4, "nm_pessoa": "LUCAS", "nr_pessoa": "123456789" }, ...
```

---

#### <font color="#eaa934">POST</font> register

`http://localhost:3000/register`

| HTTP Status Code                       |
| -------------------------------------- |
| <font color="#49aa29"><b>201<b></font> |

```
HTTP/1.1 201 Created
X-Powered-By: Express
Date: Fri, 31 May 2024 02:35:25 GMT
Connection: close
Content-Length: 0
```

---

#### <font color="#8661de">PATCH</font> edit-name

`http://localhost:3000/update/{id}/{name}`

| HTTP Status Code                       |
| -------------------------------------- |
| <font color="#49aa29"><b>204<b></font> |

```
HTTP/1.1 204 No Content
X-Powered-By: Express
Date: Fri, 31 May 2024 02:37:14 GMT
Connection: close
```

---

#### <font color="#8661de">PATCH </font> edit-number

`http://localhost:3000/update/{id}/{number}`
| HTTP status code |
| --- |
| <font color="#49aa29"><b>204<b></font> |

```
HTTP/1.1 204 No Content
X-Powered-By: Express
Date: Fri, 31 May 2024 02:39:21 GMT
Connection: close
```

---

#### <font color="#3346aa">PUT</font> edit-all

`http://localhost:3000/update/{id}/{name}/{number}`
| HTTP status code |
| --- |
| <font color="#49aa29"><b>204<b></font> |


```
HTTP/1.1 204 No Content
X-Powered-By: Express
Date: Fri, 31 May 2024 02:45:03 GMT
Connection: close
```
