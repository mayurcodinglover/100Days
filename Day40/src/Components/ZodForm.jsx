import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  age: z.coerce.number().min(18, { message: "You must be at least 18 years old" }).max(100, { message: "You must be under 100 years old" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
  cpass: z.string().min(6, { message: "Confirm password must be at least 6 characters long" }),
}).refine((data) => data.password === data.cpass, {
  message: "Password and confirm password must match",
  path: ["cpass"],
});

const ZodForm = () => {
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful } } = useForm({
    resolver: zodResolver(formSchema),
  });

  const submitForm = (data) => {
    console.log(data);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .zf-body {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #0d0d0f;
          background-image:
            radial-gradient(ellipse 80% 60% at 20% 0%, rgba(255,200,100,0.08) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 80% 100%, rgba(255,120,60,0.06) 0%, transparent 60%);
          font-family: 'DM Sans', sans-serif;
          padding: 2rem;
        }

        .zf-card {
          width: 100%;
          max-width: 460px;
          background: #141416;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          padding: 3rem 2.5rem 2.5rem;
          box-shadow: 0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,200,100,0.04);
          position: relative;
          overflow: hidden;
        }

        .zf-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #f5c842, #ff7b3d, transparent);
        }

        .zf-eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.65rem;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #f5c842;
          margin-bottom: 0.5rem;
        }

        .zf-title {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          color: #f0ece4;
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 2.2rem;
          letter-spacing: -0.01em;
        }

        .zf-divider {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 2rem;
        }

        .zf-divider-line {
          flex: 1;
          height: 1px;
          background: rgba(255,255,255,0.06);
        }

        .zf-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .zf-field {
          margin-bottom: 1.2rem;
          position: relative;
        }

        .zf-label {
          display: block;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          margin-bottom: 0.45rem;
          transition: color 0.2s;
        }

        .zf-field:focus-within .zf-label {
          color: #f5c842;
        }

        .zf-input {
          width: 100%;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          padding: 0.75rem 1rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          font-weight: 300;
          color: #f0ece4;
          outline: none;
          transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
          -webkit-appearance: none;
        }

        .zf-input::placeholder { color: rgba(255,255,255,0.18); }

        .zf-input:focus {
          border-color: rgba(245,200,66,0.5);
          background: rgba(245,200,66,0.04);
          box-shadow: 0 0 0 3px rgba(245,200,66,0.08);
        }

        .zf-input.error {
          border-color: rgba(255,90,90,0.5);
          background: rgba(255,90,90,0.04);
        }

        .zf-error {
          font-size: 0.72rem;
          color: #ff6b6b;
          margin-top: 0.35rem;
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .zf-error::before {
          content: '!';
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 13px;
          height: 13px;
          border-radius: 50%;
          background: #ff6b6b;
          color: #0d0d0f;
          font-size: 0.6rem;
          font-weight: 700;
          flex-shrink: 0;
        }

        .zf-btn {
          width: 100%;
          margin-top: 0.8rem;
          padding: 0.9rem 1rem;
          background: linear-gradient(135deg, #f5c842 0%, #ff7b3d 100%);
          color: #0d0d0f;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: opacity 0.2s, transform 0.15s, box-shadow 0.2s;
          box-shadow: 0 4px 20px rgba(245,200,66,0.2);
        }

        .zf-btn:hover {
          opacity: 0.92;
          transform: translateY(-1px);
          box-shadow: 0 8px 28px rgba(245,200,66,0.3);
        }

        .zf-btn:active {
          transform: translateY(0);
        }

        .zf-footer {
          margin-top: 1.5rem;
          text-align: center;
          font-size: 0.75rem;
          color: rgba(255,255,255,0.2);
        }

        .zf-footer a {
          color: rgba(245,200,66,0.7);
          text-decoration: none;
        }

        .zf-footer a:hover { color: #f5c842; }

        .zf-success {
          text-align: center;
          padding: 1.5rem 0;
          color: #a0f0a0;
          font-size: 0.9rem;
        }
      `}</style>

      <div className="zf-body">
        <div className="zf-card">
          <p className="zf-eyebrow">Get started</p>
          <h1 className="zf-title">Create your<br />account</h1>

          <form onSubmit={handleSubmit(submitForm)} noValidate>
            {/* Name + Age row */}
            <div className="zf-row">
              <div className="zf-field">
                <label className="zf-label" htmlFor="name">Name</label>
                <input
                  id="name"
                  className={`zf-input${errors.name ? ' error' : ''}`}
                  placeholder="Jane Doe"
                  {...register('name')}
                />
                {errors.name && <p className="zf-error">{errors.name.message}</p>}
              </div>

              <div className="zf-field">
                <label className="zf-label" htmlFor="age">Age</label>
                <input
                  id="age"
                  type="number"
                  className={`zf-input${errors.age ? ' error' : ''}`}
                  placeholder="25"
                  {...register('age')}
                />
                {errors.age && <p className="zf-error">{errors.age.message}</p>}
              </div>
            </div>

            {/* Email */}
            <div className="zf-field">
              <label className="zf-label" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                className={`zf-input${errors.email ? ' error' : ''}`}
                placeholder="jane@example.com"
                {...register('email')}
              />
              {errors.email && <p className="zf-error">{errors.email.message}</p>}
            </div>

            {/* Password */}
            <div className="zf-field">
              <label className="zf-label" htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                className={`zf-input${errors.password ? ' error' : ''}`}
                placeholder="Min. 6 characters"
                {...register('password')}
              />
              {errors.password && <p className="zf-error">{errors.password.message}</p>}
            </div>

            {/* Confirm Password */}
            <div className="zf-field">
              <label className="zf-label" htmlFor="cpass">Confirm Password</label>
              <input
                id="cpass"
                type="password"
                className={`zf-input${errors.cpass ? ' error' : ''}`}
                placeholder="Repeat password"
                {...register('cpass')}
              />
              {errors.cpass && <p className="zf-error">{errors.cpass.message}</p>}
            </div>

            <button type="submit" className="zf-btn">Create Account →</button>
          </form>

          <p className="zf-footer">
            Already have an account? <a href="#">Sign in</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default ZodForm;