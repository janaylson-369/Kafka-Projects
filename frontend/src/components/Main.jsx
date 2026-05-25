import { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

export default function Main() {
const [produto, setProduto] = useState('');
const [valor, setValor] = useState('');

const enviarPedido = async (e) => {
        e.preventDefault();
        
        // Conexão direta com o Microserviço A (Spring Boot)
        try {
        const resposta = await fetch('http://localhost:8080/api/pedidos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ produto, valor: parseFloat(valor) })
        });

        if (resposta.ok) {
            alert(`Sucesso! Pedido de "${produto}" enviado ao Kafka.`);
            setProduto('');
            setValor('');
        } else {
            alert('Erro ao enviar pedido para o backend.');
        }
        } catch (erro) {
            console.error(erro);
            alert('O backend Spring Boot está desligado!');
        }
    };

    return (
        <Container>
        <Row>
            <Col>
            <Card>
                <Card.Body>
                <Card.Title>Painel de Pedidos Assíncronos</Card.Title>
                <Form onSubmit={enviarPedido}>
                    <Form.Group controlId="formProduto">
                    <Form.Label>Item do Pedido</Form.Label>
                    <Form.Control
                        type="text"
                        value={produto}
                        onChange={(e) => setProduto(e.target.value)}
                        required
                    />
                    </Form.Group>

                    <Form.Group controlId="formValor">
                    <Form.Label>Preço Unitário</Form.Label>
                    <Form.Control
                        type="number"
                        value={valor}
                        onChange={(e) => setValor(e.target.value)} 
                        required
                    />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                    Disparar para o Kafka
                    </Button>
                </Form>
                </Card.Body>
            </Card>
            </Col>
        </Row>
        </Container>
    );
};