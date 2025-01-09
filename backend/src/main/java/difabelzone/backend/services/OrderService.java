package difabelzone.backend.services;

import difabelzone.backend.payloads.OrderDTO;
import jakarta.transaction.Transactional;

public interface OrderService {
     @Transactional
     OrderDTO placeOrder(String emailId, Long addressId, String paymentMethod, String pgName, String pgPaymentId, String pgStatus, String pgResponseMessage);
}
