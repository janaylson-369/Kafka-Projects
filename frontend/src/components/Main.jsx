
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import './Card.css';

export default function Main() {
    const [produto, setProduto] = useState('');
    const [valor, setValor] = useState('');

    // const enviarPedido = (e) => {
    //     e.preventDefault();
    //     console.log('Pedido'+ { produto, valor }+ 'enviado ao kafka');
    // }

    const enviarPedido = async (e) => {
    e.preventDefault();

    const pedido = {
        produto: produto,
        valor: parseInt(valor)
    };

    try {
        // Envia os dados para o Microserviço de Compras
        const response = await fetch('http://localhost:8080/api/pedidos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(pedido),
        });

        if (response.ok) {
            alert('Pedido realizado com sucesso! Processando notificação...');
            setProduto('');
            setValor('');
        } else {
            alert('Erro ao enviar pedido.');
        }
    } catch (error) {
        console.error('Erro na requisição:', error);
    }
};

    return (
        <Container className="justify-content-center " id="card-container">
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

                    <Button variant="primary" type="submit"  className='form-label'>
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