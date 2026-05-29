package com.example.notificacao_service;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

@Component
public class PedidoListener {
    @KafkaListener(topics = "pedidos-novos", groupId = "grupo-seminario")
    public void ouvirPedidos(String pedido) {
        System.out.println("📥 Mensagem pura recebida: " + pedido);
        // Aqui você pode adicionar lógica para processar o pedido e enviar notificações
        System.out.println("✅ Notificação enviada para o pedido: " + pedido);}
}
