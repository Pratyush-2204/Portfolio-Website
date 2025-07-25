import React, { useState } from "react";
import Input, { Textarea } from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";


const ContactForm = ({ setFormSubmitted }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setFormSubmitted(true);
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }, 1500);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send Me a Message</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Your Name"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="John Doe"
          icon="User"
          required
          error={errors.name}
        />
        
        <Input
          label="Your Email"
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com"
          icon="Mail"
          required
          error={errors.email}
        />
      </div>
      
      <Input
        label="Subject"
        id="subject"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        placeholder="What is this regarding?"
        icon="MessageSquare"
      />
      
      <Textarea
        label="Your Message"
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Tell me about your project, questions, or feedback..."
        rows={6}
        required
        error={errors.message}
      />
      
      <div className="flex items-center">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          icon={isSubmitting ? "Loader" : "Send"}
          iconPosition="right"
          disabled={isSubmitting}
          className="mt-2"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;